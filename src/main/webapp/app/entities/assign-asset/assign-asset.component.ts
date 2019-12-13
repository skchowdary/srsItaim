import { IAddAsset } from './../add-asset/add-asset.model';
import { IAddEmployee } from './../add-employee/add-employee.model';
import { IAssignAsset, AssignAsset } from './assign-asset.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';
import { IAssetList } from '../asset-type.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'jhi-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {
  assignAsset: IAssignAsset;
  employeeName: IAddEmployee[] = [];
  assetLists: IAssetList[] = [];
  serialNoLists: IAddAsset[] = [];
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getEmpList();
    this.getSerialNoList();
    this.getAssetType();
  }

  onSubmit() {
    this.service.createAssignAsset(this.assignAsset).subscribe(res => {
      if (res.status === 200) {
        this.assignAsset = res.body;
        Swal.fire('', 'Successfully Saved', 'success');
      } else if (res.status === 208) {
        Swal.fire('Oops', 'This Serial No. is already assigned', 'error');
      }
    });
  }
  private getEmpList() {
    this.service.findAllEmployee().subscribe(data => {
      this.employeeName = data.body;
    });
  }
  private getSerialNoList() {
    this.service.findAllAddAsset().subscribe(data => {
      this.serialNoLists = data.body;
    });
  }
  private getAssetType() {
    this.service.findAllAssetType().subscribe(data => {
      // eslint-disable-next-line no-console
      console.log('response ' + data.body);
      this.assetLists = data.body;
    });
  }
  reset() {
    this.assignAsset.assetType = null;
    this.assignAsset.serialNumber = null;
    this.assignAsset.assignTo = null;
    this.assignAsset.assignmentDate = null;
  }
}
