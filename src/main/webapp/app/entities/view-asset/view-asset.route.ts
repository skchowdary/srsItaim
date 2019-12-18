import { Route } from '@angular/router';

import { ViewAssetComponent } from './view-asset.component';

export const VIEWASSET_ROUTE: Route = {
  path: 'viewasset',
  component: ViewAssetComponent,
  data: {
    authorities: [],
    pageTitle: 'View Asset'
  }
};
