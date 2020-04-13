import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IItegration } from '../../interfaces/IItegration';
import { IntegrationsService } from '../../services/integrations/integrations.service';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

export interface TreeNodeInterface {
  key: number;
  name: string;
  displayName: string;
  status: string;
  level?: number;
  expand?: boolean;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

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

  listOfMapData = [];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  constructor(
    private readonly integrationsService: IntegrationsService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setStatisticsById(this.route.snapshot.paramMap.get('id'));
  }

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if (!$event) {
      if (data.children.length !== 0) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  setStatisticsById(id: string) {
    this.integrationsService.getStatisticsById(id).subscribe((result) => {
      this.statistics = result;
      this.statistics.rules = this.addId(result.rules);

      this.doughnutChartData = [[this.statistics.metrics.ok, this.statistics.metrics.fail]];

      this.statistics.rules.forEach((item) => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
    });
  }

  private addId(rules: any[]) {
    return rules.map((r) => {
      const children = this.addId(r.children);

      return { ...{ key: this.random(1, 1000000) }, ...r, ...{ children } };
    });
  }

  private random(low: number, high: number) {
    return Math.random() * (high - low) + low;
  }

  changeIntegration(integration: IItegration) {
    this.integration = integration;
    this.setStatisticsById(this.integration.id);
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: true });

    while (stack.length !== 0) {
      const node = stack.pop();

      if (!hashMap[node.key]) {
        hashMap[node.key] = true;
        array.push(node);
      }

      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level + 1, expand: true, parent: node });
        }
      }
    }

    return array;
  }
}
