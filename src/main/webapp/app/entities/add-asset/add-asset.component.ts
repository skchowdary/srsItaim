import { IAssetList, AssetList } from '../asset-type.model';
import { AssetInventoryService } from '../assetinventory.service';
import { Component, OnInit } from '@angular/core';
import { IAddAsset, AddAsset } from './add-asset.model';
import Swal from 'sweetalert2';
import { IManufacturer } from '../manufacturer.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jhi-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss']
})
export class AddAssetComponent implements OnInit {
  addAsset: IAddAsset;
  assetLists: IAssetList[] = [];
  manufacturerList: IManufacturer[] = [];

  constructor(private service: AssetInventoryService, private route: Router) {}

  ngOnInit() {
    this.addAsset = new AddAsset();
    this.getAssetType();
    this.getManufacturerList();
  }

  save(form: NgForm) {
    this.service.createAddAsset(this.addAsset).subscribe(res => {
      if (res.status === 200) {
        this.addAsset = new AddAsset();
        Swal.fire('', 'Successfully Saved', 'success');
        //this.route.navigateByUrl('/dashboard');
        form.form.markAsPristine();
        form.resetForm();
      } else if (res.status === 208) {
        this.addAsset = new AddAsset();
        Swal.fire('', 'This Serial No. is already exist', 'error');
        form.reset(form.value);
        this.addAsset.serialNumber = '';
      }
    });
  }

  private getAssetType() {
    this.service.findAllAssetType().subscribe(data => {
      this.assetLists = data.body;
    });
  }
  private getManufacturerList() {
    this.service.findAllManufacturerList().subscribe(data => {
      this.manufacturerList = data.body;
    });
  }
  reset(form: NgForm) {
    form.form.markAsPristine();
    form.resetForm();
  }
}
