import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AssignAssetComponent } from './assign-asset/assign-asset.component';
import { ReleaseAssetComponent } from './release-asset/release-asset.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ReportsComponent } from './reports/reports.component';
import { ADDASSETS_ROUTE } from './add-asset/add-asset.route';
import { ASSIGNASSET_ROUTE } from './assign-asset/assign-asset.route';
import { ADDEMPLOYEE_ROUTE } from './add-employee/add-employee.route';
import { ADDCLIENT_ROUTE } from './add-client/add-client.route';
import { REPORTS_ROUTE } from './reports/reports.route';
import { RELEASEASSET_ROUTE } from './release-asset/release-asset.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewClientComponent } from './view-client/view-client.component';
import { VIEWCLIENT_ROUTE } from './view-client/view-client.route';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
    NgxPaginationModule,
    RouterModule.forChild([
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
      ADDASSETS_ROUTE,
      ASSIGNASSET_ROUTE,
      ADDEMPLOYEE_ROUTE,
      ADDCLIENT_ROUTE,
      REPORTS_ROUTE,
      RELEASEASSET_ROUTE,
      VIEWCLIENT_ROUTE
    ])
  ],
  declarations: [
    AddAssetComponent,
    AssignAssetComponent,
    ReleaseAssetComponent,
    AddEmployeeComponent,
    AddClientComponent,
    ReportsComponent,
    ViewClientComponent
  ]
})
export class ItaimApplicationEntityModule {}
