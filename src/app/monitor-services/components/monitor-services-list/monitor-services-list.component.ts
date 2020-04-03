import { Component, OnInit, ViewChild } from '@angular/core';
import { IntegrationsService } from '../../services/integrations/integrations.service';
import { IItegration } from '../../interfaces/IItegration';
import { MonitorServicesDetailComponent } from '../monitor-services-detail/monitor-services-detail.component';

@Component({
  selector: 'app-monitor-services-list',
  templateUrl: './monitor-services-list.component.html',
  styleUrls: ['./monitor-services-list.component.scss'],
})
export class MonitorServicesListComponent implements OnInit {
  integrationsList: IItegration[];
  integrationSelected: IItegration;

  @ViewChild(MonitorServicesDetailComponent) monitorServicesDetailComponent;

  constructor(private readonly integrationsService: IntegrationsService) {}

  ngOnInit(): void {
    this.integrationsService.getIntegrationsList().subscribe((list: IItegration[]) => (this.integrationsList = list));
    this.setIntegrationActiveById('github');
  }

  setIntegrationActiveById(id: string) {
    this.integrationsList.map((integration) => (integration.active = id === integration.id ? true : false));

    this.integrationSelected = this.integrationsList.filter((integration) => integration.active)[0];

    if (this.monitorServicesDetailComponent) {
      this.monitorServicesDetailComponent.changeIntegration(this.integrationSelected);
    }
  }
}
