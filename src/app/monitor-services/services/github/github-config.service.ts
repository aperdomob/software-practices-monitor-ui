import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepositoryOverview } from '../../interfaces/repository-overview';

@Injectable({
  providedIn: 'root',
})
export class GithubConfigService {
  private readonly url = 'http://localhost:3000';
  constructor(private readonly http: HttpClient) {}

  getAllRepositories(): Observable<RepositoryOverview[]> {
    return this.http.get<RepositoryOverview[]>(`${this.url}/repositories`);
  }
}
