import { IClient, Client } from './add-client.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';
import { tsExpressionWithTypeArguments } from '@babel/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'jhi-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClient: IClient;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.addClient = new Client();
  }
  onSubmit() {
    this.service.createClient(this.addClient).subscribe(res => {
      if (res.status === 200) {
        this.addClient = res.body;
        Swal.fire('', 'Successfully Saved', 'success');
      } else if (res.status === 208) {
        Swal.fire('Oops', 'name is already exist', 'error');
      }
    });
  }
  reset() {
    this.addClient.clientName = null;
  }
}
