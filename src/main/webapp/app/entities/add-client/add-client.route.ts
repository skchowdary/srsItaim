import { Route } from '@angular/router';

import { AddClientComponent } from './add-client.component';

export const ADDCLIENT_ROUTE: Route = {
  path: 'addclient',
  component: AddClientComponent,
  data: {
    authorities: [],
    pageTitle: 'Add Client'
  }
};
