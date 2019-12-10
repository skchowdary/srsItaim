import { Route } from '@angular/router';

import { ReportsComponent } from './reports.component';

export const REPORTS_ROUTE: Route = {
  path: 'reports',
  component: ReportsComponent,
  data: {
    authorities: [],
    pageTitle: 'Reports'
  }
};
