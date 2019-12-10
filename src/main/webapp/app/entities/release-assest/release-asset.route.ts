import { Route } from '@angular/router';

import { ReleaseAssestComponent } from './release-assest.component';

export const RELEASEASSET_ROUTE: Route = {
  path: 'releaseasset',
  component: ReleaseAssestComponent,
  data: {
    authorities: [],
    pageTitle: 'Release Asset'
  }
};
