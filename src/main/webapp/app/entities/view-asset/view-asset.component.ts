import { Component, OnInit } from '@angular/core';
import { IAssignAsset } from '../assign-asset/assign-asset.model';
import { IAddAsset } from '../add-asset/add-asset.model';
import { AssetInventoryService } from '../assetinventory.service';
@Component({
  selector: 'jhi-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.scss']
})
export class ViewAssetComponent implements OnInit {
  viewAssignAsset: IAssignAsset[] = [];
  viewAddAsset: IAddAsset[] = [];

  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.getAllAddAsset();
    this.getAllAssignAsset();
  }
  private getAllAddAsset() {
    this.service.findAllAddAsset().subscribe(data => {
      this.viewAddAsset = data.body;
    });
  }
  private getAllAssignAsset() {
    this.service.findAllAssignAsset().subscribe(data => {
      this.viewAssignAsset = data.body;
    });
  }
}
