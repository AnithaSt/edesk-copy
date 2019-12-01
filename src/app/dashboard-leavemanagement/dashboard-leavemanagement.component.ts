import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard-leavemanagement',
  templateUrl: './dashboard-leavemanagement.component.html',
  styleUrls: ['./dashboard-leavemanagement.component.css']
})
export class DashboardLeavemanagementComponent implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
  }

}
