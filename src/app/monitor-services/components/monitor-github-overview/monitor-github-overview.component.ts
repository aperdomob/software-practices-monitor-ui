import { Component, OnInit } from '@angular/core';
import { GithubConfigService } from '../../services/github/github-config.service';
import { RepositoryOverview } from '../../interfaces/repository-overview';

@Component({
  selector: 'app-monitor-github-overview',
  templateUrl: './monitor-github-overview.component.html',
  styleUrls: ['./monitor-github-overview.component.css'],
})
export class MonitorGithubOverviewComponent implements OnInit {
  repositories: RepositoryOverview[] = [];

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
