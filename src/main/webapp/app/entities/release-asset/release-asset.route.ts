import { Route } from '@angular/router';

import { ReleaseAssetComponent } from './release-asset.component';

export const RELEASEASSET_ROUTE: Route = {
  path: 'releaseasset',
  component: ReleaseAssetComponent,
  data: {
    authorities: [],
    pageTitle: 'Release Asset'
  }
};
