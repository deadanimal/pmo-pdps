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
import { AgencyRoutes } from './agency.routing';
import { ProgramInfoComponent } from './program-info/program-info.component';
import { ProfileComponent } from './profile/profile.component';
import { BannerComponent } from './banner/banner.component';
import { ReportComponent } from './report/report.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { ProgramsComponent } from './programs/programs.component';
import { BannerRequestComponent } from './banner-request/banner-request.component';
import { RequestedDataComponent } from './requested-data/requested-data.component';
import { SearchIndividualProfileComponent } from './search-individual-profile/search-individual-profile.component';



@NgModule({
  declarations: [ProgramInfoComponent, ProfileComponent, BannerComponent, ReportComponent, RequestDataComponent, ProgramAddComponent, ProgramsComponent, BannerRequestComponent, RequestedDataComponent, SearchIndividualProfileComponent],
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
    RouterModule.forChild(AgencyRoutes)
  ]
})
export class AgencyModule { }
