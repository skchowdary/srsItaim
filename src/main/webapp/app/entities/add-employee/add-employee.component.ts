import { IAddEmployee, AddEmployee } from './add-employee.model';
import { AssetInventoryService } from './../assetinventory.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'jhi-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee: IAddEmployee;
  registerForm: FormGroup;
  constructor(private service: AssetInventoryService,private formBuilder: FormBuilder){}

  ngOnInit() {
    this.addEmployee = new AddEmployee();
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]    
  });
  }
  onSave() {
    this.service.createEmployee(this.addEmployee).subscribe(res => {
      if (res.status === 200) {
        this.addEmployee = new AddEmployee();
        Swal.fire('', 'Successfully Saved', 'success');
      } else if (res.status === 208) {
        this.addEmployee = new AddEmployee();
        Swal.fire('Oops', 'Email Id is already exist', 'error');
      }
    });
  }
  reset() {
    this.addEmployee.name = '';
    this.addEmployee.email = '';
    this.addEmployee.phone = null;
    this.addEmployee.address = '';
  }
}
