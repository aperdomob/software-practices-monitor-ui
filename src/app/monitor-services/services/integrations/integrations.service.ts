import { Injectable } from '@angular/core';
import { IItegration } from '../../interfaces/IItegration';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntegrationsService {
  constructor() {}

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
    id.toString();
    return of({
      result: [
        {
          name: 'repo-description',
          result: 'OK',
        },
        {
          name: 'private-repository',
          result: 'OK',
        },
        {
          name: 'pages-disabled',
          result: 'OK',
        },
        {
          name: 'dependency-graph',
          result: 'OK',
        },
        {
          name: 'security-alerts',
          result: 'OK',
        },
        {
          name: 'allow-commits',
          result: 'OK',
        },
        {
          name: 'disabled-squash',
          result: 'FAILED',
          error: {
            message: 'the squash buttons is enable: expected true to be false',
            actual: true,
            expected: false,
          },
        },
        {
          name: 'disabled-rebase',
          result: 'FAILED',
          error: {
            message: 'the rebase buttons is enable: expected true to be false',
            actual: true,
            expected: false,
          },
        },
        {
          name: 'automatically-delete-branch',
          result: 'OK',
        },
        {
          name: 'has-team-sf-team',
          result: 'OK',
        },
        {
          name: 'has-team-sf-leads',
          result: 'OK',
        },
        {
          name: 'has-team-cc-admins',
          result: 'FAILED',
          error: {
            message:
              'the team "cc-admins" is not configured: expected undefined to exist',
          },
        },
        {
          name: 'has-team-cc-leads',
          result: 'FAILED',
          error: {
            message:
              'the team "cc-leads" is not configured: expected undefined to exist',
          },
        },
        {
          name: 'no-direct-people',
          result: 'FAILED',
          error: {
            message:
              'the repository has configured 1 people directly and should have 0: expected 0 to equal 1',
            actual: 0,
            expected: 1,
          },
        },
        {
          name: 'protection-rule-master',
          result: 'OK',
        },
        {
          name: 'protection-rule-develop',
          result: 'OK',
        },
        {
          name: 'protection-rule-release/*',
          result: 'OK',
        },
        {
          name: 'protection-rule-hotfix/*',
          result: 'OK',
        },
        {
          name: 'protection-rule-**/**',
          result: 'OK',
        },
      ],
      total: 19,
      ok: 14,
      fail: 5,
    });
  }
}
