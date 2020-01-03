import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAddAsset } from '../add-asset/add-asset.model';
import { AssetInventoryService } from '../assetinventory.service';
import { IAssignAsset, AssignAsset } from '../assign-asset/assign-asset.model';
import Swal from 'sweetalert2';
import moment = require('moment');

@Component({
  selector: 'jhi-release-asset',
  templateUrl: './release-asset.component.html',
  styleUrls: ['./release-asset.component.scss']
})
export class ReleaseAssetComponent implements OnInit {
  @ViewChild('reason', { static: false }) reason: ElementRef;
  config: any;
  assignAsset: IAssignAsset;
  assignAssetList: IAssignAsset[] = [];
  validReasonValue: boolean;
  constructor(private service: AssetInventoryService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.assignAssetList.length
    };
  }

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getAllAssignAsset();
  }

  private getAllAssignAsset() {
    this.service.findByAssignStatus('Assigned').subscribe(data => {
      this.assignAssetList = data.body;
    });
  }

  releaseAssignedAsset(assign: IAssignAsset) {
    // this.assignAsset = new AssignAsset();
    // this.assignAsset.id = this.assignAssetList[i].id;
    // this.assignAsset.assetType = this.assignAssetList[i].assetType;
    // this.assignAsset.serialNumber = this.assignAssetList[i].serialNumber;
    // this.assignAsset.assignTo = this.assignAssetList[i].assignTo;
    // this.assignAsset.assignmentDate = this.assignAssetList[i].assignmentDate;
    assign.status = 'Released';
    // this.assignAsset.reason = this.reason.nativeElement.value;
    assign.releasedDate = moment();
    //eslint-disable-next-line no-console
    console.log('released date', assign.releasedDate);
    // this.assignAsset.reason = this.assignAssetList[i].reason;
    //eslint-disable-next-line no-console
    // console.log('value is : ' + this.reason.nativeElement.value);
    //eslint-disable-next-line no-console
    console.log('reason', assign.reason);
    if (assign.reason === '') {
      Swal.fire('', 'mention the reason', 'error');
    } else {
      this.service.updateAssignAsset(assign).subscribe(data => {
        this.assignAsset = data.body;
        if (data.status === 200) {
          Swal.fire('', 'Released Successfully', 'success');
          this.getAllAssignAsset();
        }
      });
    }
  }
  pageChanged(event) {
    this.config.totalItems = this.assignAssetList.length;
    this.config.currentPage = event;
  }
}
