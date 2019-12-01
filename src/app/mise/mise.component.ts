import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mise',
  templateUrl: './mise.component.html',
  styleUrls: ['./mise.component.css']
})
export class MiseComponent implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); 
  }

  show: boolean = false;

  ngOnInit() {
   
  }
  user : any;
  choice(value){
    this.user = value;
    this.show = true;
  }
  
}
