import { Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramInfoComponent } from './program-info/program-info.component';
import { ReportComponent } from './report/report.component';
import { RequestDataComponent } from './request-data/request-data.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { ProgramsComponent } from './programs/programs.component';
import { BannerRequestComponent } from './banner-request/banner-request.component';
import { RequestedDataComponent } from './requested-data/requested-data.component';
import { SearchIndividualProfileComponent } from './search-individual-profile/search-individual-profile.component';

export const AgencyRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'banner',
                component: BannerComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'program-info',
                component: ProgramInfoComponent
            },
            {
                path: 'report',
                component: ReportComponent
            },
            {
                path: 'request-data',
                component: RequestDataComponent
            },
            {
                path: 'program-add',
                component: ProgramAddComponent
            },
            {
                path: 'programs',
                component: ProgramsComponent
            },
            {
                path: 'banner-request',
                component: BannerRequestComponent
            },
            {
                path: 'requested-data',
                component: RequestedDataComponent
            },
            {
                path: 'search-individual-profile',
                component: SearchIndividualProfileComponent
            }
        ]
    }
]