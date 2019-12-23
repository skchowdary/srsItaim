import { Component, OnInit } from '@angular/core';
import { IAssignAsset, AssignAsset } from '../assign-asset/assign-asset.model';
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
  status: any;
  assignTo: any;
  assignmentDate: any;
  listAllAssetReports: any;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.getAllAddAsset();
    this.getAllAssignAsset();
    this.getAllAssetReports();
  }
  private getAllAssignAsset() {
    this.service.findAllAssignAsset().subscribe(data => {
      this.viewAssignAsset = data.body;
    });
  }
  private getAllAddAsset() {
    this.service.findAllAddAsset().subscribe(data => {
      this.viewAddAsset = data.body;
    });
  }
  private getAllAssetReports() {
    this.service.findAllViewAsset().subscribe(data => {
      this.listAllAssetReports = data.body;
    });
  }
}
