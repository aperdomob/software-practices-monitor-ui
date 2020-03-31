import { Component, Input, OnInit } from '@angular/core';
import { IItegration } from '../../interfaces/IItegration';
import { IntegrationsService } from '../../services/integrations/integrations.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-monitor-services-detail',
  templateUrl: './monitor-services-detail.component.html',
  styleUrls: ['./monitor-services-detail.component.scss'],
})
export class MonitorServicesDetailComponent implements OnInit {
  @Input() integration: IItegration;
  public statistics;

  // Doughnut
  public doughnutChartLabels: Label[] = ['Ok', 'Errors'];
  public doughnutChartData: MultiDataSet = [[350, 450]];
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartColors = [
    {
      backgroundColor: ['#8DD30B', '#F83F3C'],
    },
  ];

  public successCode = 'OK';
  public errorCode = 'Fail';

  constructor(private readonly integrationsService: IntegrationsService) {}

  ngOnInit(): void {
    this.setStatisticsById('github-manager');
  }

  setStatisticsById(id: string) {
    this.integrationsService.getStatisticsById(id).subscribe((result) => {
      this.statistics = result;
      this.doughnutChartData = [
        [this.statistics.metrics.ok, this.statistics.metrics.fail],
      ];
    });
  }

  changeIntegration(integration: IItegration) {
    this.integration = integration;
    this.setStatisticsById(this.integration.id);
  }
}
