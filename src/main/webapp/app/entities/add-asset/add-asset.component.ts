import { AssetInventoryService } from '../assetinventory.service';
import { Component, OnInit } from '@angular/core';
import { IAddAsset } from './add-asset.model';

@Component({
  selector: 'jhi-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {
  addAsset: IAddAsset;

  constructor(private service: AssetInventoryService) {}

  ngOnInit() {}

  save() {
    this.service.createAddAsset(this.addAsset).subscribe(res => {
      this.addAsset = res.body;
    });
  }
}
