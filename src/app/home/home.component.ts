import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
bindData:any;
data:any;
  constructor(public service:EmployeeService,public route:Router) { }

  ngOnInit() {
    this.service.getLogin().subscribe(res=>{
      this.bindData=res;
      console.log(this.bindData)
    })
  }
  send(value){
    // this.data =value;
    // console.log(this.data.email);
    
    for(let i=0;i<this.bindData.length;i++){
      if(value.email==""){
        Swal.fire({
          type:'error',
          title:'Please Enter Valid Email-Id'
        })
      }
      else if(value.password==""){
        Swal.fire({
          type:'error',
          title:'Please Enter Valid Password',
        })
      }
      else if(value.email != this.bindData[i].email){
        Swal.fire({
          type:'error',
          title:'Incorrect',
          text:'Incorrect Email',
        });
      }
      else if(value.password != this.bindData[i].password){
        Swal.fire({
          type:'error',
          title:'Incorrect',
          text:'Incorrect Password',
        });
      }
      else{
        this.route.navigate(['/employee/dashboard']);
      }
      // if(value.email==this.bindData[i].email){
      //   if(value.password==this.bindData[i].password){
      //     this.route.navigate(['/employee/dashboard']);
      //   }else{
      //     Swal.fire({
      //       type: 'error',
      //       title: 'incorrect...',
      //       text: 'Password incorrect!',
      //     });
      //   }
      // }else{
      //   Swal.fire({
      //     type: 'error',
      //     title: 'incorrect...',
      //     text: 'Email incorrect!',
      //   });
      // }
    }
  }

}
