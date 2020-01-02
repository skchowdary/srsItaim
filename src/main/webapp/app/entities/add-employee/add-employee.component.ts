import { IAddEmployee, AddEmployee } from './add-employee.model';
import { AssetInventoryService } from './../assetinventory.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'jhi-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee: IAddEmployee;
  employeeName: IAddEmployee[] = [];
  constructor(private service: AssetInventoryService, private route: Router) {}

  ngOnInit() {
    this.addEmployee = new AddEmployee();
  }
  onSave(form: NgForm) {
    this.service.createEmployee(this.addEmployee).subscribe(res => {
      if (res.status === 200) {
        this.addEmployee = new AddEmployee();
        this.getEmpList();
        Swal.fire('', 'Successfully Saved', 'success');
        //this.route.navigateByUrl('/dashboard');
        form.form.markAsPristine();
        form.resetForm();
      } else if (res.status === 208) {
        this.addEmployee = new AddEmployee();
        Swal.fire('Oops', 'Email Id is already exist', 'error');
      }
    });
  }
  private getEmpList() {
    this.service.findAllEmployee().subscribe(data => {
      this.employeeName = data.body;
    });
  }
  reset(form: NgForm) {
    form.form.markAsPristine();
    form.resetForm();
  }
}
