import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-payroll',
  templateUrl: './dashboard-payroll.component.html',
  styleUrls: ['./dashboard-payroll.component.css']
})
export class DashboardPayrollComponent implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
  }

}
