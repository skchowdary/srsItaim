import { Route } from '@angular/router';

import { AddEmployeeComponent } from './add-employee.component';

export const ADDEMPLOYEE_ROUTE: Route = {
  path: 'addemployee',
  component: AddEmployeeComponent,
  data: {
    authorities: [],
    pageTitle: 'Add Employee'
  }
};
