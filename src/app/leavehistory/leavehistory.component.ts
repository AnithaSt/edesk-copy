import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import{ EmployeeService } from '../employee.service';

@Component({
  selector: 'app-leavehistory',
  templateUrl: './leavehistory.component.html',
  styleUrls: ['./leavehistory.component.css']
})
export class LeavehistoryComponent implements OnInit {
  bindData:any;

  constructor(private location:Location,public service:EmployeeService) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
    this.service.leavegetData().subscribe(res=>{
      this.bindData = res;
      console.log(res)
    })
  }

}
