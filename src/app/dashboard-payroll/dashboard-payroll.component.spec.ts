import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPayrollComponent } from './dashboard-payroll.component';

describe('DashboardPayrollComponent', () => {
  let component: DashboardPayrollComponent;
  let fixture: ComponentFixture<DashboardPayrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPayrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
