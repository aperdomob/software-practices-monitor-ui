import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      backgroundColor: ['#52C41A', '#F5222D'],
    },
  ];

  public successCode = 'OK';
  public errorCode = 'Fail';

  constructor(
    private readonly integrationsService: IntegrationsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setStatisticsById(this.route.snapshot.paramMap.get('id'));
  }

  setStatisticsById(id: string) {
    this.integrationsService.getStatisticsById(id).subscribe((result) => {
      this.statistics = result;
      this.doughnutChartData = [[this.statistics.metrics.ok, this.statistics.metrics.fail]];
    });
  }

  changeIntegration(integration: IItegration) {
    this.integration = integration;
    this.setStatisticsById(this.integration.id);
  }
}
