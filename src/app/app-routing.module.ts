import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorServicesListComponent } from './monitor-services/components/monitor-services-list/monitor-services-list.component';
import { MonitorGithubOverviewComponent } from './monitor-services/components/monitor-github-overview/monitor-github-overview.component';
import { MonitorServicesDetailComponent } from './monitor-services/components/monitor-services-detail/monitor-services-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: '',
        component: MonitorServicesListComponent,
        pathMatch: 'full',
      },
      { path: 'github-overview', component: MonitorGithubOverviewComponent },
      { path: 'github-overview/:id', component: MonitorServicesDetailComponent },
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
