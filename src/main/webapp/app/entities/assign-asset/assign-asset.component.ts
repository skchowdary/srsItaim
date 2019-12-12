import { IAddAsset } from './../add-asset/add-asset.model';
import { IAddEmployee } from './../add-employee/add-employee.model';
import { IAssignAsset, AssignAsset } from './assign-asset.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';

@Component({
  selector: 'jhi-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {
  assignAsset: IAssignAsset;
  employeeName: IAddEmployee[] = [];
  serialNoLists: IAddAsset[] = [];
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getEmpList();
    this.getSerialNoList();
  }

  onSubmit() {
    this.service.createAssignAsset(this.assignAsset).subscribe(res => {
      this.assignAsset = res.body;
    });
  }
  private getEmpList() {
    this.service.findAllEmployee().subscribe(data => {
      // eslint-disable-next-line no-console
      console.log('response ' + data.body);
      this.employeeName = data.body;
    });
  }
  private getSerialNoList() {
    this.service.findAllAddAsset().subscribe(data => {
      this.serialNoLists = data.body;
    });
  }
}
