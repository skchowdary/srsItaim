import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ItaimApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [ItaimApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class ItaimApplicationHomeModule {}
