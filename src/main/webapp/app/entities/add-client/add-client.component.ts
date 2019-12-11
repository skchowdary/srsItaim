import { IAddClient } from './add-client.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';

@Component({
  selector: 'jhi-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClient: IAddClient;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {}
  onSubmit() {
    this.service.createClient(this.addClient).subscribe(res => {
      this.addClient = res.body;
    });
  }
}
