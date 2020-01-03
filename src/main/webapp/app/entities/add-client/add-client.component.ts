import { IClient, Client } from './add-client.model';
import { Component, OnInit } from '@angular/core';
import { AssetInventoryService } from '../assetinventory.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jhi-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  addClient: IClient;
  clientsList: IClient[] = [];
  config: any;
  constructor(private service: AssetInventoryService, private route: Router) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.clientsList.length
    };
  }

  ngOnInit() {
    this.addClient = new Client();
    this.findAllClients();
  }
  findAllClients() {
    this.service.findAllClient().subscribe(res => {
      this.clientsList = res.body;
    });
  }
  reset(form: NgForm) {
    form.form.markAsPristine();
    form.resetForm();
  }
  onSubmit(form: NgForm) {
    if (this.addClient !== null && this.addClient.id == null) {
      this.service.createClient(this.addClient).subscribe(res => {
        if (res.status === 200) {
          this.addClient = new Client();
          this.findAllClients();
          Swal.fire('', 'Successfully Saved', 'success');
          //this.route.navigateByUrl('/dashboard');
          form.form.markAsPristine();
          form.resetForm();
        } else if (res.status === 208) {
          this.addClient = new Client();
          Swal.fire('Oops', 'client name is already exist', 'error');
        }
      });
    } else {
      this.service.updateClient(this.addClient).subscribe(value => {
        if (value.status === 200) {
          this.addClient = new Client();
          this.findAllClients();
          Swal.fire('', 'Client Name Edited Successfully', 'success');
          form.form.markAsPristine();
          form.resetForm();
        } else if (value.status === 208) {
          this.addClient = new Client();
          Swal.fire('Oops', 'Fail! Client Name is Already Exist', 'error');
        }
      });
    }
  }
  deleteClient(id: any) {
    this.service.deleteClient(id).subscribe(value => {
      if (value.status === 200) {
        Swal.fire('', 'Deleted Successfully', 'success');
        this.findAllClients();
      }
    });
  }

  editClient(id: any) {
    this.service.findClientById(id).subscribe(value => {
      this.addClient = value.body;
    });
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
}
