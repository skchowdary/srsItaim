import { Component, OnInit } from '@angular/core';
import { IAssignAsset } from '../assign-asset/assign-asset.model';
import { AssetInventoryService } from '../assetinventory.service';

@Component({
  selector: 'jhi-view-releasedasset',
  templateUrl: './view-releasedasset.component.html',
  styleUrls: ['./view-releasedasset.component.scss']
})
export class ViewReleasedassetComponent implements OnInit {
  releasedAssetList: IAssignAsset[] = [];
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.getAllReleasedAsset();
  }

  private getAllReleasedAsset() {
    this.service.findByAssignStatus('Released').subscribe(data => {
      this.releasedAssetList = data.body;
    });
  }
}
