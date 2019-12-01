import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-bankupdate',
  templateUrl: './bankupdate.component.html',
  styleUrls: ['./bankupdate.component.css']
})
export class BankupdateComponent implements OnInit {
  id:any;
  bindData:any;
  display:any = {
    holderName:'',
    accountNo:'',
    bankName:'',
    branch:'',
    upiId:'',
    ifsc:''
  }

  constructor(public service:EmployeeService,private toastr: ToastrService,private location: Location,public router:Router,public routing:ActivatedRoute) { }
  cancel(){
    this.location.back();
  }
  ngOnInit() {
    this.id = this.routing.snapshot.params['id'];
    this.service.bankGet().subscribe(res=>{
      this.bindData = res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id===this.bindData[i].id){
          this.display.id = this.bindData[i].id;
          this.display.holderName = this.bindData[i].holderName;
          this.display.accountNo = this.bindData[i].accountNo;
          this.display.branch = this.bindData[i].branch;
          this.display.bankName = this.bindData[i].bankName;
          this.display.ifsc = this.bindData[i].ifsc;
          this.display.upiId = this.bindData[i].upiId;
        }
      }
    })
  }
upDate(value){
  this.id=this.routing.snapshot.params['id'];
  this.service.bankUpdate(this.id,value).subscribe(res=>{
    this.bindData=res;
    this.toastr.success(' Update successfully!');
    this.router.navigate(['/employee/bank']);

  })
}
}
