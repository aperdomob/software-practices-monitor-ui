import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorServicesDetailComponent } from './monitor-services-detail.component';

describe('MonitorServicesDetailComponent', () => {
  let component: MonitorServicesDetailComponent;
  let fixture: ComponentFixture<MonitorServicesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorServicesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
