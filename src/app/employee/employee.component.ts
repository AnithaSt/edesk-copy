import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id:any;
  bindData:any;
  display:any={
    userName:''
  }

  constructor(public service:EmployeeService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getLogin().subscribe(res=>{
      this.bindData=res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id==this.bindData[i].id){
          this.display.userName = this.bindData[i].userName;
          console.log(this.bindData[i])
          console.log(this.display)
          
        }
      }
    })
  }

}
