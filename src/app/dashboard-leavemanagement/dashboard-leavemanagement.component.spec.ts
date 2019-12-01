import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLeavemanagementComponent } from './dashboard-leavemanagement.component';

describe('DashboardLeavemanagementComponent', () => {
  let component: DashboardLeavemanagementComponent;
  let fixture: ComponentFixture<DashboardLeavemanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLeavemanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLeavemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
