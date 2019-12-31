import { Component, OnInit } from '@angular/core';
import { IAssignAsset, AssignAsset } from '../assign-asset/assign-asset.model';
import { IAddAsset } from '../add-asset/add-asset.model';
import { AssetInventoryService } from '../assetinventory.service';
import { IViewAllAsset } from '../view-asset.model';
@Component({
  selector: 'jhi-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  viewAssignAsset: IAssignAsset[] = [];
  viewAddAsset: IAddAsset[] = [];
  listAllAssetReports: IViewAllAsset[] = [];
  config: any;
  constructor(private service: AssetInventoryService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.listAllAssetReports.length
    };
  }

  ngOnInit() {
    this.getAllAssetReports();
  }

  private getAllAssetReports() {
    this.service.findAllViewAsset().subscribe(data => {
      this.listAllAssetReports = data.body;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
