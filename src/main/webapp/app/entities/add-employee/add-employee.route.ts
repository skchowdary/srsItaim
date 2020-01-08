import { Route } from '@angular/router';

import { AddEmployeeComponent } from './add-employee.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const ADDEMPLOYEE_ROUTE: Route = {
  path: 'addemployee',
  component: AddEmployeeComponent,
  data: {
    authorities: [],
    pageTitle: 'Add Employee'
  },
  canActivate: [UserRouteAccessService]
};
