import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorGithubOverviewComponent } from './monitor-github-overview.component';

describe('MonitorGithubOverviewComponent', () => {
  let component: MonitorGithubOverviewComponent;
  let fixture: ComponentFixture<MonitorGithubOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonitorGithubOverviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorGithubOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
