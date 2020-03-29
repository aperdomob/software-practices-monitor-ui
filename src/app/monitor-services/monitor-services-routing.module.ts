import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const monitorServicesRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(monitorServicesRoutes)],
  exports: [RouterModule],
})
export class MonitorServicesRoutingModule {}
