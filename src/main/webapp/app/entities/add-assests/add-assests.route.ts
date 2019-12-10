import { Route } from '@angular/router';

import { AddAssestsComponent } from './add-assests.component';

export const ADDASSETS_ROUTE: Route = {
  path: 'addassets',
  component: AddAssestsComponent,
  data: {
    authorities: [],
    pageTitle: 'Add Assets'
  }
};
