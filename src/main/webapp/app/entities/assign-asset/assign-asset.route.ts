import { Route } from '@angular/router';

import { AssignAssetComponent } from './assign-asset.component';

export const ASSIGNASSET_ROUTE: Route = {
  path: 'assignasset',
  component: AssignAssetComponent,
  data: {
    authorities: [],
    pageTitle: 'Assign Assets'
  }
};
