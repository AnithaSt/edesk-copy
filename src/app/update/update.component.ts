import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  edit:any;
  id:any;
  // base64textString:any=[];
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
    offcialEmail:'',
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
    dol:'',
    sslcPic:'',
    hscPic:'',
    diplomaPic:'',
    ugPic:'',
    pgPic:'',
    resumePic:'',
    photoPic:'',
    aadhaarPic:''
  }


  constructor(private datepipe: DatePipe,public service:EmployeeService,private spinner:NgxSpinnerService,public routing:ActivatedRoute,private toastr: ToastrService,private location: Location,public router:Router) { }
  cancel() {
    this.location.back(); 
  }
  see:any;
  show:any;
  date:any;
  ngOnInit() {
    this.id=this.routing.snapshot.params['id'];
    console.log(this.id);
    this.service.getdata().subscribe(res=>{
      this.bindData=res;
      for(let i=0;i<this.bindData.length;i++){
        if(this.id===this.bindData[i].id){
          this.display.id=this.bindData[i].id;
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
          this.display.offcialEmail = this.bindData[i].offcialEmail;
          this.display.phoneNum = this.bindData[i].phoneNum;
          this.display.altNum = this.bindData[i].altNum;
          this.display.school = this.bindData[i].school;
          this.display.percentage = this.bindData[i].percentage;
          this.display.sSchool = this.bindData[i].sSchool;
          this.display.sPercentage = this.bindData[i].sPercentage;
          this.display.collage = this.bindData[i].collage;
          this.display.underGraduate= this.bindData[i].underGraduate;
         
          this.display.ugpercentage = this.bindData[i].ugpercentage;
          this.display.pgCollage = this.bindData[i].pgCollage;
          this.display.postGraduate= this.bindData[i].postGraduate;
         
          this.display.pgPercentage = this.bindData[i].pgPercentage;
          this.display.doj = this.bindData[i].doj;
          this.display.dol = this.bindData[i].dol;
          this.display.diploma = this.bindData[i].diploma;
          this.display.dCourse = this.bindData[i].dCourse;
          this.display.dPercentage = this.bindData[i].dPercentage;
          this.display.sslcPic = this.bindData[i].sslcPic;
          this.display.hscPic = this.bindData[i].hscPic;
          this.display.diplomaPic = this.bindData[i].diplomaPic;
          this.display.ugPic= this.bindData[i].ugPic;
          this.display.pgPic = this.bindData[i].pgPic;
          this.display.resumePic = this.bindData[i].resumePic;
          this.display.photoPic = this.bindData[i].photoPic
          this.display.aadhaarPic = this.bindData[i].aadhaarPic;
          // this.display.pict = this.bindData[i].pict;
          // this.display.dpict = this.bindData[i].dpict;
          // this.display.picture= this.bindData[i].picture;
          // this.display.picture1 = this.bindData[i].picture1;
          // this.display.picture2 = this.bindData[i].picture2;
          // this.display.picture3 = this.bindData[i].picture3;
          console.log(this.bindData[i])
          console.log(this.display)
          
        }
      }
    })

  }
  // file(evt){ 
  //   const file = evt.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  
  //     reader.onload = this.handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(file);
  //   }
  // }

  // handleReaderLoaded(e) {
  //   this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  //   console.log(this.base64textString)
  // }
  updates(value){
    let data  = {
      // userPic:this.base64textString,
      altNum:value.altNum,
      cCity:value.cCity,
      collage:value.collage,
      country:value.country,
      ugPercentage:value.ugPercentage,
      cState:value.cState,
      cStreet:value.cStreet,
      cZip:value.cZip,
      dateofBirth:this.datepipe.transform(value.dateofBirth,'MM-dd-yy'),
      dCourse:value.dCourse,
      diploma:value.diploma,
      doj:value.doj,
      dol:this.datepipe.transform(value.dol,'MM-dd-yy'),
      dPercentage:value.dPercentage,    
      element_8:value.element_8,
      email:value.email,
      offcialEmail:value.offcialEmail,
      fatherName:value.fatherName,
      firstName:value.firstName,
      lastName:value.lastName,
      motherName:value.motherName,
      pCity:value.pCity,
      pCountry:value.pCountry,
      percentage:value.percentage,
      phoneNum:value.phoneNum,
      underGraduate:value.underGraduate,    
      pState:value.pState,
      pStreet:value.pStreet,
      pZip:value.pZip,
      school:value.school,
      sPercentage:value.sPercentage,
      sSchool:value.sSchool,
      pgCollage:value.pgCollage,
      postGraduate:value.postGraduate,
      pgPercentage:value.pgPercentage,
      sslcPic:value.sslcPic,
      hscPic:value.hscPic,
      diplomaPic:value.diplomaPic,
      ugPic:value.ugPic,
      pgPic:value.pgPic,
      resumePic:value.resumePic,
      photoPic:value.photoPic,
      aadhaarPic:value.aadhaarPic
      

    }
    this.id=this.routing.snapshot.params['id'];
    console.log('the id am passing --------' ,this.id);  
    console.log('value am passing ----------', value)
    this.service.update(this.id,data).subscribe(res=>{
    this.bindData=res;
    this.toastr.success(' Update successfully!');
    this.router.navigate(['/employee/list']);
    }) 
 
  } 
  // change(value){
  //   this.see = value;
    
  //   console.log(this.see);
  //  } 
  //  chang(value){
  //   this.show=value;
  //   console.log(this.show);

  //  }

}
