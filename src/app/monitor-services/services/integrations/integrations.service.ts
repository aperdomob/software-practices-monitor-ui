import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItegration } from '../../interfaces/IItegration';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntegrationsService {
  constructor(private readonly http: HttpClient) {}

  getIntegrationsList(): Observable<IItegration[]> {
    return of([
      {
        iconPath: 'assets/icons/github.svg',
        name: 'Github',
        id: 'github',
        active: false,
      },
      {
        iconPath: 'assets/icons/jest.png',
        name: 'Jest',
        id: 'jest',
        active: false,
      },
    ]);
  }

  getStatisticsById(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/repositories/${id}`);
  }
}
