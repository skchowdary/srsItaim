import { IAddAsset } from './../add-asset/add-asset.model';
import { IAddEmployee } from './../add-employee/add-employee.model';
import { IAssignAsset, AssignAsset } from './assign-asset.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';
import { IAssetList } from '../asset-type.model';
import Swal from 'sweetalert2';
import moment = require('moment');
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  invalidSerialNo: boolean;
  constructor(private service: AssetInventoryService, private route: Router) {}

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getEmpList();
    this.getSerialNoList();
    this.getAssetType();
    this.getAllAssignAsset();
  }

  onSubmit(form: NgForm) {
    this.invalidDate = false;
    this.invalidSerialNo = false;

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
    if (!this.invalidDate) {
      for (let j = 0; j < this.assignAssetList.length; j++) {
        if (this.assignAsset.serialNumber === this.assignAssetList[j].serialNumber) {
          if (this.assignAssetList[j].status === 'Assigned') {
            this.invalidSerialNo = true;
            Swal.fire('', 'This Serial No. is already assigned', 'warning');
            // } else if (this.assignAssetList[j].status === 'Returned') {
            //   //eslint-disable-next-line no-console
            //   console.log('update data', this.assignAssetList[j].status);
            //   this.invalidSerialNo = true;
            //   this.assignAsset.id = this.assignAssetList[j].id;
            //   this.assignAsset.status = 'Assigned';
            //   this.assignAsset.reason = '';
            //   this.service.updateAssignAsset(this.assignAsset).subscribe(res => {
            //     if (res.status === 200) {
            //       this.assignAsset = new AssignAsset();
            //       this.getAllAssignAsset();
            //       Swal.fire('', 'Successfully Assigned', 'success');
            //     }
            //   });
          }
        }
      }
    }

    if (!this.invalidSerialNo && !this.invalidDate) {
      this.assignAsset.status = 'Assigned';
      this.assignAsset.reason = '';
      //   this.assignAsset.releasedDate = moment(undefined);
      //eslint-disable-next-line no-console
      console.log('create data', this.assignAsset.id);
      this.service.createAssignAsset(this.assignAsset).subscribe(res => {
        if (res.status === 200) {
          this.assignAsset = new AssignAsset();
          this.getAllAssignAsset();
          Swal.fire('', 'Successfully Assigned', 'success');
          //this.route.navigateByUrl('/dashboard');
          form.form.markAsPristine();
          form.resetForm();
        }
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
      this.assetLists = data.body;
    });
  }
  reset(form: NgForm) {
    form.form.markAsPristine();
    form.resetForm();
  }
}
