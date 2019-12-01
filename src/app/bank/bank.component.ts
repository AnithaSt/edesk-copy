import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import{ EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bindData:any;
  
  constructor(private location:Location, private service:EmployeeService) { }
  
  cancel(){
    this.location.back();
  }
  ngOnInit() {
    this.service.bankGet().subscribe(res=>{
      this.bindData = res;
      console.log(res)
    })
  }
  dele(value){    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Data!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) { 
  this.service.bankDelete(value).subscribe(res=>{
    this.ngOnInit();
        Swal.fire(
          'Deleted!',
          'Your Data has been deleted.',
          'success'
        )
       
  })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Data is safe :)',
          'error'
        )
      }
    })      
}
}
