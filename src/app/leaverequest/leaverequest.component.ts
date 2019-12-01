import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import{ EmployeeService } from '../employee.service';
import { DatePipe } from '@angular/common'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.css']
})
export class LeaverequestComponent implements OnInit {
  date:any;
  display:any={
    startDate:'',
    endDate:'',
    days:'',
    leaveType:'',
    reason:''
  }

  constructor(private location: Location,public service:EmployeeService,private datePipe: DatePipe) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'dd-MM-yy');
  }
  
  sendData(value){
    console.log(value)
    let data ={
      startDate:this.datePipe.transform(value.startDate,'MM-dd-yy'),
      endDate:this.datePipe.transform(value.endDate,'MM-dd-yy'),
      days:value.days,
      leaveType:value.leaveType,
      reason:value.reason
    }
    this.service.leaveRequest(data).subscribe(res=>{
      console.log(res)
      Swal.fire(
        'Add Successfully',
        'success'
      )
      location.reload();
    })
    
  }

}
