import { IAssetList, AssetList } from './../asset-type.module';
import { AssetInventoryService } from '../assetinventory.service';
import { Component, OnInit } from '@angular/core';
import { IAddAsset, AddAsset } from './add-asset.model';

@Component({
  selector: 'jhi-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {
  addAsset: IAddAsset;
  assetLists: IAssetList[] = [];

  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.addAsset = new AddAsset();
    this.getAssetType();
  }

  save() {
    this.service.createAddAsset(this.addAsset).subscribe(res => {
      this.addAsset = res.body;
    });
  }
  private getAssetType() {
    this.service.findAllAssetType().subscribe(data => {
      this.assetLists = data.body;
    });
  }
}
