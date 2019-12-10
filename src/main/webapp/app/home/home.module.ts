import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItaimApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DASHBOARD_ROUTE } from './dash-board/dash-board.route';
@NgModule({
  imports: [ItaimApplicationSharedModule, RouterModule.forChild([HOME_ROUTE, DASHBOARD_ROUTE])],
  declarations: [HomeComponent, DashBoardComponent]
})
export class ItaimApplicationHomeModule {}
