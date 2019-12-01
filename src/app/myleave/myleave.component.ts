import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myleave',
  templateUrl: './myleave.component.html',
  styleUrls: ['./myleave.component.css']
})
export class MyleaveComponent implements OnInit {

  constructor(private location: Location) { }
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
  }

}
