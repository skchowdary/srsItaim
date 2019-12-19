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
  assignAssetList: IAssignAsset[] = [];
  assignmentDateValue: any;
  serialNumberValue: any;
  invalidDate: boolean;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getEmpList();
    this.getSerialNoList();
    this.getAssetType();
    this.getAllAssignAsset();
  }

  onSubmit() {
    this.invalidDate = false;
    for (let i = 0; i < this.serialNoLists.length; i++) {
      this.assignmentDateValue = this.assignAsset.assignmentDate;
      this.serialNumberValue = this.assignAsset.serialNumber;
      if (this.serialNumberValue === this.serialNoLists[i].serialNumber) {
        if (this.assignmentDateValue < this.serialNoLists[i].procurementDate) {
          this.invalidDate = true;
          Swal.fire('', 'Assignment Date should be greater than purchase date', 'warning');
        }
      }
    }
    for (let j = 0; j < this.assignAssetList.length; j++) {
      // this.serialNumberAssignValue = this.assignAsset.serialNumber;
      if (this.assignAsset.serialNumber === this.assignAssetList[j].serialNumber) {
        if (this.assignAssetList[j].status === 'Assigned') {
          this.invalidDate = true;
          Swal.fire('', 'This Serial No. is already assigned', 'warning');
        }
      }
    }
    if (!this.invalidDate) {
      this.assignAsset.status = 'Assigned';
      this.assignAsset.reason = '';
      this.service.createAssignAsset(this.assignAsset).subscribe(res => {
        if (res.status === 200) {
          this.assignAsset = new AssignAsset();
          Swal.fire('', 'Successfully Assigned', 'success');
        }
        // } else if (res.status === 208) {
        //   this.assignAsset = new AssignAsset();
        //   Swal.fire('Oops', 'This Serial No. is already assigned', 'error');
        // }
      });
    }
  }
  private getAllAssignAsset() {
    this.service.findAllAssignAsset().subscribe(data => {
      this.assignAssetList = data.body;
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
    this.assignAsset.assetType = '';
    this.assignAsset.serialNumber = '';
    this.assignAsset.assignTo = '';
    this.assignAsset.assignmentDate = null;
  }
}
