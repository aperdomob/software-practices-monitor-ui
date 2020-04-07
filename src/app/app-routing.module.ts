import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorServicesListComponent } from './monitor-services/components/monitor-services-list/monitor-services-list.component';
import { MonitorServicesDetailComponent } from './monitor-services/components/monitor-services-detail/monitor-services-detail.component';
import { MonitorGithubOverviewComponent } from './monitor-services/components/monitor-github-overview/monitor-github-overview.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', data: { breadcrumb: 'Dashboard' } },
  { path: 'dashboard', component: MonitorServicesListComponent },
  { path: 'github-overview', component: MonitorGithubOverviewComponent },
  { path: 'github-overview/:id', component: MonitorServicesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
