import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IAddAsset } from '../add-asset/add-asset.model';
import { AssetInventoryService } from '../assetinventory.service';
import { IAssignAsset, AssignAsset } from '../assign-asset/assign-asset.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'jhi-release-asset',
  templateUrl: './release-asset.component.html',
  styleUrls: ['./release-asset.component.scss']
})
export class ReleaseAssetComponent implements OnInit {
  @ViewChild('reason', { static: false }) reason: ElementRef;
  // reason : String;
  addAssetList: IAddAsset[] = [];
  assignAsset: IAssignAsset;
  assignAssetList: IAssignAsset[] = [];
  validReasonValue: boolean;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.assignAsset = new AssignAsset();
    this.getAllAssignAsset();
  }
  // private getAllAddAsset() {
  //   this.service.findAllAddAsset().subscribe(data => {
  //     this.addAssetList = data.body;
  //   });
  // }
  private getAllAssignAsset() {
    this.service.findByStatus('Assigned').subscribe(data => {
      this.assignAssetList = data.body;
    });
  }

  releaseAssignedAsset(i) {
    this.assignAsset = new AssignAsset();
    this.assignAsset.id = this.assignAssetList[i].id;
    this.assignAsset.assetType = this.assignAssetList[i].assetType;
    this.assignAsset.serialNumber = this.assignAssetList[i].serialNumber;
    this.assignAsset.assignTo = this.assignAssetList[i].assignTo;
    this.assignAsset.assignmentDate = this.assignAssetList[i].assignmentDate;
    this.assignAsset.status = 'Returned';
    this.assignAsset.reason = this.reason.nativeElement.value(i);
    // this.assignAsset.reason = this.assignAssetList[i].reason;
    //eslint-disable-next-line no-console
    console.log('value is : ' + this.reason.nativeElement.value);
    //eslint-disable-next-line no-console
    console.log('reason', this.assignAsset.reason);
    if (this.assignAsset.reason === '') {
      Swal.fire('', 'mention the reason', 'error');
    } else {
      this.service.updateAssignAsset(this.assignAsset).subscribe(data => {
        this.assignAsset = data.body;
        if (data.status === 200) {
          Swal.fire('', 'Released Successfully', 'success');
          this.getAllAssignAsset();
        }
      });
      // }
    }
  }
}
