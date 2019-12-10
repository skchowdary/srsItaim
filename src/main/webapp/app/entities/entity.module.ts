import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAssestsComponent } from './add-assests/add-assests.component';
import { AssignAssestComponent } from './assign-assest/assign-assest.component';
import { ReleaseAssestComponent } from './release-assest/release-assest.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ReportsComponent } from './reports/reports.component';
import { ADDASSETS_ROUTE } from './add-assests/add-assests.route';
import { ASSIGNASSET_ROUTE } from './assign-assest/assign-assest.route';
import { ADDEMPLOYEE_ROUTE } from './add-employee/add-employee.route';
import { ADDCLIENT_ROUTE } from './add-client/add-client.route';
import { REPORTS_ROUTE } from './reports/reports.route';
import { RELEASEASSET_ROUTE } from './release-assest/release-asset.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      ADDASSETS_ROUTE,
      ASSIGNASSET_ROUTE,
      ADDEMPLOYEE_ROUTE,
      ADDCLIENT_ROUTE,
      REPORTS_ROUTE,
      RELEASEASSET_ROUTE
    ])
  ],
  declarations: [
    AddAssestsComponent,
    AssignAssestComponent,
    ReleaseAssestComponent,
    AddEmployeeComponent,
    AddClientComponent,
    ReportsComponent
  ]
})
export class ItaimApplicationEntityModule {}
