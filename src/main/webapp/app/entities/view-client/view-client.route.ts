import { Route } from '@angular/router';

import { ViewClientComponent } from './view-client.component';

export const VIEWCLIENT_ROUTE: Route = {
  path: 'view-clientreport',
  component: ViewClientComponent,
  data: {
    authorities: [],
    pageTitle: 'View Client'
  }
};
