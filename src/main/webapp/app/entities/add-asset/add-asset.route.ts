import { Route } from '@angular/router';

import { AddAssetComponent } from './add-asset.component';

export const ADDASSETS_ROUTE: Route = {
  path: 'addassets',
  component: AddAssetComponent,
  data: {
    authorities: [],
    pageTitle: 'Add Assets'
  }
};
