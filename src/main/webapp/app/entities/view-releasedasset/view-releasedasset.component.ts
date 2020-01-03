import { Component, OnInit } from '@angular/core';
import { IAssignAsset } from '../assign-asset/assign-asset.model';
import { AssetInventoryService } from '../assetinventory.service';

@Component({
  selector: 'jhi-view-releasedasset',
  templateUrl: './view-releasedasset.component.html',
  styleUrls: ['./view-releasedasset.component.scss']
})
export class ViewReleasedassetComponent implements OnInit {
  config: any;
  releasedAssetList: IAssignAsset[] = [];
  constructor(private service: AssetInventoryService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.releasedAssetList.length
    };
  }

  ngOnInit() {
    this.getAllReleasedAsset();
  }

  pageChanged(event) {
    this.config.totalItems = this.releasedAssetList.length;
    this.config.currentPage = event;
  }

  private getAllReleasedAsset() {
    this.service.findByAssignStatus('Released').subscribe(data => {
      this.releasedAssetList = data.body;
    });
  }
}
