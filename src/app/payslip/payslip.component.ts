import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
  }

}
