import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ViewComponent } from './view/view.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateComponent } from './update/update.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { DashboardPayrollComponent } from './dashboard-payroll/dashboard-payroll.component';
import { PayslipComponent } from './payslip/payslip.component';
import { MiseComponent } from './mise/mise.component';
import { FilterPipe } from './filter.pipe';
import { DashboardLeavemanagementComponent } from './dashboard-leavemanagement/dashboard-leavemanagement.component';
import { LeaverequestComponent } from './leaverequest/leaverequest.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { LeavehistoryComponent } from './leavehistory/leavehistory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BankComponent } from './bank/bank.component';
import { BankdetailComponent } from './bankdetail/bankdetail.component';
import { BankupdateComponent } from './bankupdate/bankupdate.component';
import { BankviewComponent } from './bankview/bankview.component';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ListComponent,
    ViewComponent,
    EmployeeComponent,
    DashboardComponent,
    UpdateComponent,
    DashboardEmployeeComponent,
    DashboardPayrollComponent,
    PayslipComponent,
    MiseComponent,
    FilterPipe,
    DashboardLeavemanagementComponent,
    LeaverequestComponent,
    AttendenceComponent,
    MyleaveComponent,
    LeavehistoryComponent,
    BankComponent,
    BankdetailComponent,
    BankupdateComponent,
    BankviewComponent,
   
  ],
  imports: [
    BrowserModule, 
    NgbModule.forRoot() , 
    BsDatepickerModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    ToastrModule.forRoot({     
      timeOut: 2000,
      extendedTimeOut: 5000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,      
    }),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PDFExportModule,
    RouterModule.forRoot([
      {path:"",pathMatch:'full',redirectTo:'home'},
      {path:'home',component:HomeComponent},  
      {path:'employee',component:EmployeeComponent,
       children: [
        {path:'dashboard',component:DashboardComponent}, 
        {path:'dashboard-employee',component:DashboardEmployeeComponent}, 
        {path:'dashboard-payroll',component:DashboardPayrollComponent}, 
        {path:'dashboard-leavemanagement',component:DashboardLeavemanagementComponent},
        {path:'detail',component:DetailComponent},
        {path:'list',component:ListComponent},
        {path:'view/:id',component: ViewComponent},
        {path:'update/:id',component:UpdateComponent},
        {path:'payslip',component:PayslipComponent}, 
        {path:'mise',component:MiseComponent},
        {path:'bank',component:BankComponent},
        {path:'bankdetail',component:BankdetailComponent},
        {path:'bankupdate/:id',component:BankupdateComponent},
        {path:'leaverequest',component:LeaverequestComponent},
        {path:'attendence',component:AttendenceComponent},
        {path:'myleave',component:MyleaveComponent},
        {path:'leavehistory',component:LeavehistoryComponent},
        {path:'bankview/:id',component: BankviewComponent}
      ]}
    ]) 
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }