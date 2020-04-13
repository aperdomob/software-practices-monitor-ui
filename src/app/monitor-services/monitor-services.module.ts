import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorServicesListComponent } from './components/monitor-services-list/monitor-services-list.component';
import { MonitorServicesRoutingModule } from './monitor-services-routing.module';
import { MonitorServicesDetailComponent } from './components/monitor-services-detail/monitor-services-detail.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { MonitorGithubOverviewComponent } from './components/monitor-github-overview/monitor-github-overview.component';
import { MatCardModule } from '@angular/material/card';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    MonitorServicesListComponent,
    MonitorServicesDetailComponent,
    MonitorGithubOverviewComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  imports: [
    CommonModule,
    MonitorServicesRoutingModule,
    ChartsModule,
    HttpClientModule,
    MatCardModule,
    NgZorroAntdModule,
  ],
})
export class MonitorServicesModule { }
