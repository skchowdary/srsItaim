import { IAssignAsset } from './assign-asset.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';

@Component({
  selector: 'jhi-assign-asset',
  templateUrl: './assign-asset.component.html',
  styleUrls: ['./assign-asset.component.scss']
})
export class AssignAssetComponent implements OnInit {
  assignAsset: IAssignAsset;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {}

  onSubmit() {
    this.service.createAssignAsset(this.assignAsset).subscribe(res => {
      this.assignAsset = res.body;
    });
  }
}
