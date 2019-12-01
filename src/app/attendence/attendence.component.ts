import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {NgbDatepickerConfig, NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css'],
  providers: [NgbDatepickerConfig] 
})
export class AttendenceComponent implements OnInit {
  model: NgbDateStruct;
  


  constructor(private location: Location,config: NgbDatepickerConfig, calendar: NgbCalendar) {
    config.minDate = {year: 1900, month: 1, day: 1};
    config.maxDate = {year: 2099, month: 12, day: 31};

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgbDate) => calendar.getWeekday(date) >= 6;
   }
  cancel() {
    this.location.back(); 
  }
  ngOnInit() {
  }

}
