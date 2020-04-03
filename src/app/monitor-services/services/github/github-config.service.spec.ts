import { TestBed } from '@angular/core/testing';

import { GithubConfigService } from './github-config.service';

describe('GithubConfigService', () => {
  let service: GithubConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
