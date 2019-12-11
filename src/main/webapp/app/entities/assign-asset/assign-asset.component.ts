import { IAddEmployee } from './../add-employee/add-employee.model';
import { IAssignAsset } from './assign-asset.model';
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
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    // eslint-disable-next-line no-console
    console.log('nagendra ngOnInit');
    this.getEmpList();
  }

  onSubmit() {
    this.service.createAssignAsset(this.assignAsset).subscribe(res => {
      this.assignAsset = res.body;
    });
  }
  private getEmpList() {
    this.service.findAllEmployee().subscribe(data => {
      // eslint-disable-next-line no-console
      console.log('nagendra response ' + data.body);
      this.employeeName = data.body;
      // eslint-disable-next-line no-console
      console.log('nagendra length ' + this.employeeName.length);
    });
  }
}
