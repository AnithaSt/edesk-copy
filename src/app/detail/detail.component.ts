import { Component, OnInit } from '@angular/core';
import{ EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'; 
import { validateConfig } from '@angular/router/src/config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
 
  
})
export class DetailComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  see:any;
  show:any;
  date:any;
  constructor(private datepipe: DatePipe,public data:EmployeeService,private toastr: ToastrService,private formBuilder: FormBuilder,private location: Location) {}
  cancel() {
    this.location.back(); 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      dateofBirth: ['',Validators.required],
      element_8:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      offcialEmail:[''],
      phoneNum:['',Validators.required],
      altNum:[''],
      cStreet:['',Validators.required],
      cCity:['',Validators.required],
      cState:['Tamil Nadu'],
      cZip:['',Validators.required],
      country:['India'],
      pStreet:['',Validators.required],
      pCity:['',Validators.required],
      pState:['Tamil Nadu'],
      pZip:['',Validators.required],
      pCountry:['India'],
      doj:['',Validators.required],
      dol:[''],
      school:['',Validators.required],
      percentage:['',Validators.required],
      sslcPic:[''],
      sSchool:[''],
      sPercentage:[''],
      hscPic:[''],
      diploma:[''],
      dCourse:[''],
      dPercentage:[''],
      diplomaPic:[''],
      collage:['',Validators.required],
      underGraduate:['',Validators.required],
      ugPercentage:['',Validators.required],
      ugPic:[''],
      pgCollage:[''],
      postGraduate:[''],
      pgPercentage:[''],
      pgPic:[''],
      resumePic:[''],
      photoPic:[''],
      aadhaarPic:['']
      
  });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    let data = {
      firstName:this.registerForm.value.firstName,
      lastName:this.registerForm.value.lastName,
      fatherName:this.registerForm.value.fatherName,
      motherName:this.registerForm.value.motherName,
      dateofBirth:this.datepipe.transform(this.registerForm.value.dateofBirth,'MM-dd-yy'),
      element_8:this.registerForm.value.element_8,
      email:this.registerForm.value.email,
      offcialEmail:this.registerForm.value.offcialEmail,
      phoneNum:this.registerForm.value.phoneNum,
      altNum:this.registerForm.value.altNum,
      cStreet:this.registerForm.value.cStreet,
      cCity:this.registerForm.value.cCity,
      cState:this.registerForm.value.cState,
      cZip:this.registerForm.value.cZip,
      country:this.registerForm.value.country,
      pStreet:this.registerForm.value.pStreet,
      pCity:this.registerForm.value.pCity,
      pState:this.registerForm.value.pState,
      pZip:this.registerForm.value.pZip,
      pCountry:this.registerForm.value.pCountry,
      doj:this.datepipe.transform(this.registerForm.value.doj,'MM-dd-yy'),
      dol:this.datepipe.transform(this.registerForm.value.dol,'MM-dd-yy'),
      school:this.registerForm.value.school,
      percentage:this.registerForm.value.percentage,
      sSchool:this.registerForm.value.sSchool,
      sPercentage:this.registerForm.value.sPercentage,
      diploma:this.registerForm.value.diploma,
      dCourse:this.registerForm.value.dCourse,
      dPercentage:this.registerForm.value.dPercentage,
      collage:this.registerForm.value.collage,
      underGraduate:this.registerForm.value.underGraduate,
      ugPercentage:this.registerForm.value.ugPercentage,
      pgCollage:this.registerForm.value.pgCollage,
      postGraduate:this.registerForm.value.postGraduate,
      pgPercentage:this.registerForm.value.pgPercentage,
      sslcPic:this.registerForm.value.sslcPic,
      hscPic:this.registerForm.value.hscPic,
      diplomaPic:this.registerForm.value.diplomaPic,
      ugPic:this.registerForm.value.ugPic,
      pgPic:this.registerForm.value.pgPic,
      resumePic:this.registerForm.value.resumePic,
      photoPic:this.registerForm.value.photoPic,
      aadhaarPic:this.registerForm.value.aadhaarPic
    }
    
    this.submitted = true;   
    if (this.registerForm.invalid) {
        return;
    }else{
      // console.log(this.registerForm.value)
      this.data.senddata(data).subscribe(res=>{
      console.log(res)
      this.toastr.success(' successfully added!');
      location.reload();

      })
           
    }
    

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}  
// selectDate(value){
//   console.log(this.date)
//   console.log('hi')
// console.log(value)
// }
}
