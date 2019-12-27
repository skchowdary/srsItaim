import { Route } from '@angular/router';

import { ViewReleasedassetComponent } from './view-releasedasset.component';

export const VIEWRELEASEDASSET_ROUTE: Route = {
  path: 'view-releasedasset',
  component: ViewReleasedassetComponent,
  data: {
    authorities: [],
    pageTitle: 'View releasedasset'
  }
};
