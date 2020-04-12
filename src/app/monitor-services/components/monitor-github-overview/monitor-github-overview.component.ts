import { Component, OnInit } from '@angular/core';
import { GithubConfigService } from '../../services/github/github-config.service';
import { RepositoryOverview } from '../../interfaces/repository-overview';
import { Label   } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-monitor-github-overview',
  templateUrl: './monitor-github-overview.component.html',
  styleUrls: ['./monitor-github-overview.component.css'],
})
export class MonitorGithubOverviewComponent implements OnInit {
  repositories: RepositoryOverview[] = [];

  public doughnutChartLabels: Label[] = ['Ok', 'Errors'];
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartColors = [
    {
      backgroundColor: ['#8DD30B', '#F83F3C'],
    },
  ];

  constructor(private readonly githubConfigService: GithubConfigService) {}

  ngOnInit(): void {
    this.loadRepositories();
  }

  loadRepositories() {
    this.githubConfigService.getAllRepositories().subscribe((repositories) => {
      this.repositories = repositories;
    });
  }
}
