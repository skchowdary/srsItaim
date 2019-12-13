import { IAddEmployee, AddEmployee } from './add-employee.model';
import { AssetInventoryService } from './../assetinventory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployee: IAddEmployee;
  constructor(private service: AssetInventoryService) {}

  ngOnInit() {
    this.addEmployee = new AddEmployee();
  }
  onSave() {
    this.service.createEmployee(this.addEmployee).subscribe(res => {
      this.addEmployee = res.body;
    });
  }
}
