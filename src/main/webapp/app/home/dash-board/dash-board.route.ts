import { Route } from '@angular/router';

import { DashBoardComponent } from './dash-board.component';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';

export const DASHBOARD_ROUTE: Route = {
  path: 'dashboard',
  component: DashBoardComponent,
  data: {
    authorities: [],
    pageTitle: 'Dashboard'
  },
  canActivate: [UserRouteAccessService]
};
