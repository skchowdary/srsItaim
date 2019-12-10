import { Route } from '@angular/router';

import { DashBoardComponent } from './dash-board.component';

export const DASHBOARD_ROUTE: Route = {
  path: 'dashboard',
  component: DashBoardComponent,
  data: {
    authorities: [],
    pageTitle: 'dashboard.title'
  }
};
