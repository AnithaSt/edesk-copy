import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms';
import{Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bankdetail',
  templateUrl: './bankdetail.component.html',
  styleUrls: ['./bankdetail.component.css']
})
export class BankdetailComponent implements OnInit {
  bankDetail:FormGroup;
  submitted = false;
  
  constructor(private location:Location, private formBuilder:FormBuilder, private service:EmployeeService ,private toastr: ToastrService) { }
  cancel(){
    this.location.back();
  }

  ngOnInit() {
    this.bankDetail = this.formBuilder.group({
      holderName:['',Validators.required],
      accountNo:['',Validators.required],
      ifsc:['',Validators.required],
      branch:['',Validators.required],
      bankName:['',Validators.required],
      upiId:['',Validators.required]
    });
  }
  get f() { return this.bankDetail.controls; } 

  bank(value){
    
    this.submitted = true;
    if(this.bankDetail.invalid){
      this.toastr.error(' Please fill details!'); 
      return;
    }
    else{
      this.service.bankSend(value).subscribe(res=>{
        this.toastr.success(' successfully added!'); 
        location.reload();
      })
    }
  }

}
