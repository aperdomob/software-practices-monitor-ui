import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorServicesListComponent } from './monitor-services/components/monitor-services-list/monitor-services-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    data: { breadcrumb: 'Dashboard' },
    children: [
      {
        path: '',
        component: MonitorServicesListComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
