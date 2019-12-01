import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-bankview',
  templateUrl: './bankview.component.html',
  styleUrls: ['./bankview.component.css']
})
export class BankviewComponent implements OnInit {
  id : any;
  bindData : any;
  display : any = {
    holderName : '',
    accountNo : '',
    ifsc : '',
    bankName : '',
    branch : '',
    upiId : ''
  }

  cancel() {
    this.location.back(); 
  }

  constructor(
    public service : EmployeeService,
    private location : Location,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.bankGet().subscribe(res => {
      this.bindData = res; 
      for(let i = 0; i < this.bindData.length; i++) {
        if(this.id == this.bindData[i].id){
          this.display.holderName = this.bindData[i].holderName;
          this.display.accountNo = this.bindData[i].accountNo;
          this.display.ifsc = this.bindData[i].ifsc;
          this.display.bankName = this.bindData[i].bankName;
          this.display.branch = this.bindData[i].branch;
          this.display.upiId = this.bindData[i].upiId;

          console.log(this.bindData[i])
          console.log(this.display)
        }
      }
    })
  }

 
}