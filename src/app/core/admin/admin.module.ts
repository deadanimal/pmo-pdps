import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routing';
import { ProfileComponent } from './profile/profile.component';
import { BannerComponent } from './banner/banner.component';
import { ReportComponent } from './report/report.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProgramComponent } from './program/program.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [ProfileComponent, BannerComponent, ReportComponent, RequestDataComponent, UserManagementComponent, ProgramComponent, UserComponent, UserAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    // NgxDatatableModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forChild(AdminRoutes)
  ]
})
export class AdminModule { }
