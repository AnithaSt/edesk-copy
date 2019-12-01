import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id:any;
  userImage:any;
  bindData:any;
  display:any={
    firstName:'',
    lastName:'',
    dateofBirth:'',
    element_8:'',
    fatherName:'',
    motherName:'',
    cStreet:'',
    cCity:'',
    cState:'',
    cZip:'',
    country:'',
    pStreet:'',
    pCity:'',
    pState:'',
    pZip:'',
    pCountry:'',
    email:'',
    phoneNum:'',
    altNum:'',
    school:'',
    percentage:'',
    sSchool:'',
    sPercentage:'',
    diploma:'',
    dCourse:'',
    dPercentage:'',
    collage:'',
    underGraduate:'',   
    ugPercentage:'',
    pgCollage:'',
    postGraduate:'',   
    pgpercentage:'',  
    doj:'',
    dol:''
    
  }

  constructor(public service:EmployeeService,private route:ActivatedRoute,private location: Location) { }
  
  cancel() {
    this.location.back(); 
  }
  
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getdata().subscribe(res=>{
      this.bindData=res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id==this.bindData[i].id){
          this.display.firstName = this.bindData[i].firstName;
          this.display.lastName = this.bindData[i].lastName;
          this.display.dateofBirth = this.bindData[i].dateofBirth;
          this.display.element_8 = this.bindData[i].element_8;
          this.display.fatherName = this.bindData[i].fatherName;
          this.display.motherName = this.bindData[i].motherName;
          this.display.cStreet = this.bindData[i].cStreet;
          this.display.cState = this.bindData[i].cState;
          this.display.cCity = this.bindData[i].cCity;
          this.display.cZip = this.bindData[i].cZip;
          this.display.country = this.bindData[i].country;
          this.display.pStreet = this.bindData[i].pStreet;
          this.display.pState = this.bindData[i].pState;
          this.display.pCity = this.bindData[i].pCity;
          this.display.pZip = this.bindData[i].pZip;
          this.display.pCountry = this.bindData[i].pCountry;
          this.display.email = this.bindData[i].email;
          this.display.phoneNum = this.bindData[i].phoneNum;
          this.display.altNum = this.bindData[i].altNum;
          this.display.school = this.bindData[i].school;
          this.display.percentage = this.bindData[i].percentage;
          this.display.sSchool = this.bindData[i].sSchool;
          this.display.sPercentage = this.bindData[i].sPercentage;
          this.display.collage = this.bindData[i].collage;
          this.display.underGraduate= this.bindData[i].underGraduate;
         
          this.display.ugPercentage = this.bindData[i].ugPercentage;
          this.display.pgCollage = this.bindData[i].pgCollage;
          this.display.postGraduate= this.bindData[i].postGraduate;
         
          this.display.pgPercentage = this.bindData[i].pgPercentage;
          this.display.doj = this.bindData[i].doj;
          this.display.dol = this.bindData[i].dol;
          this.display.diploma = this.bindData[i].diploma;
          this.display.dCourse = this.bindData[i].dCourse;
          this.display.dPercentage = this.bindData[i].dPercentage;
          this.display.sslcPic = this.bindData[i].pic;
          this.display.hscPic = this.bindData[i].pict;
          this.display.diplomaPic = this.bindData[i].dpict;
          this.display.ugPic= this.bindData[i].picture;
          this.display.pgPic = this.bindData[i].picture1;
          this.display.ugPic = this.bindData[i].picture2;
          // this.display.p = this.bindData[i].picture3;
          // this.display.pic = this.bindData[i].userPic
          console.log(this.bindData[i])
          console.log(this.display)
          
        }
      }
    })
  }

}
