import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';
import { IClient } from '../add-client/add-client.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'jhi-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
  clientsList: IClient[] = [];
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.findAllClients();
  }

  findAllClients() {
    this.service.findAllClient().subscribe(res => {
      this.clientsList = res.body;
    });
  }

  deleteClient(id: any) {
    this.service.deleteClient(id).subscribe(value => {
      // eslint-disable-next-line no-console
      console.log('-----------deleted------------', value.status);
      if (value.status === 200) {
        // eslint-disable-next-line no-console
        console.log('-----------deleted------------');
        Swal.fire('', 'Deleted Successfully', 'success');
        this.findAllClients();
      }
    });
  }

  // editClient(id: any) {
  //   this.service.findClientById(id).subscribe(value => {
  //     this.addClient = value.body;
  //   });
  // }
}
