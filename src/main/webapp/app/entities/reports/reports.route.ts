import { Route } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const REPORTS_ROUTE: Route = {
  path: 'reports',
  component: ReportsComponent,
  data: {
    authorities: [],
    pageTitle: 'Reports'
  },
  canActivate: [UserRouteAccessService]
};
