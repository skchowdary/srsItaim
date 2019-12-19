import { Component, OnInit } from '@angular/core';
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
  addAssetList: IAddAsset[] = [];
  assignAsset: IAssignAsset;
  assignAssetList: IAssignAsset[] = [];
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    // this.getAllAddAsset();
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
  releaseAssignedAsset(i: any) {
    this.assignAsset = new AssignAsset();
    this.assignAsset.id = this.assignAssetList[i].id;
    this.assignAsset.assetType = this.assignAssetList[i].assetType;
    this.assignAsset.serialNumber = this.assignAssetList[i].serialNumber;
    this.assignAsset.assignTo = this.assignAssetList[i].assignTo;
    this.assignAsset.assignmentDate = this.assignAssetList[i].assignmentDate;
    this.assignAsset.status = 'Returned';
    this.service.updateAssignAsset(this.assignAsset).subscribe(data => {
      this.assignAsset = data.body;
      if (data.status === 200) {
        Swal.fire('', 'released Successfully', 'success');
      }
    });
  }
}
