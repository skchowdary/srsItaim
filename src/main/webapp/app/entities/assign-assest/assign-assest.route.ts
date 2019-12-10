import { Route } from '@angular/router';

import { AssignAssestComponent } from './assign-assest.component';

export const ASSIGNASSET_ROUTE: Route = {
  path: 'assignasset',
  component: AssignAssestComponent,
  data: {
    authorities: [],
    pageTitle: 'Assign Assets'
  }
};
