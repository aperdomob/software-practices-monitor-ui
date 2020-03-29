import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorServicesListComponent } from './monitor-services-list.component';

describe('MonitorServicesListComponent', () => {
  let component: MonitorServicesListComponent;
  let fixture: ComponentFixture<MonitorServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
