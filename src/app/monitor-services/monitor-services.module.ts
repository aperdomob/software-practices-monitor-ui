import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorServicesListComponent } from './components/monitor-services-list/monitor-services-list.component';
import { MonitorServicesRoutingModule } from './monitor-services-routing.module';
import { MonitorServicesDetailComponent } from './components/monitor-services-detail/monitor-services-detail.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [MonitorServicesListComponent, MonitorServicesDetailComponent],
  imports: [CommonModule, MonitorServicesRoutingModule, ChartsModule],
})
export class MonitorServicesModule {}
