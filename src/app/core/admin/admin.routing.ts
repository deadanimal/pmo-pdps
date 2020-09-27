import { Routes } from "@angular/router";
import { BannerComponent } from "./banner/banner.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProgramComponent } from "./program/program.component";
import { ReportComponent } from "./report/report.component";
import { RequestDataComponent } from "./request-data/request-data.component";
import { UserManagementComponent } from "./user-management/user-management.component";
import { UserComponent } from "./user/user.component";
import { ProgramAddComponent } from "../agency/program-add/program-add.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { ProgramIcuAdminComponent } from "./program-icu-admin/program-icu-admin.component";
import { BannerIcuAdminComponent } from "./banner-icu-admin/banner-icu-admin.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "banner",
        component: BannerComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "program",
        component: ProgramComponent,
      },
      {
        path: "report",
        component: ReportComponent,
      },
      {
        path: "request-data",
        component: RequestDataComponent,
      },
      {
        path: "user-management",
        component: UserManagementComponent,
      },
      {
        path: "user",
        component: UserComponent,
      },
      {
        path: "program-add",
        component: ProgramAddComponent,
      },
      {
        path: "user-add",
        component: UserAddComponent,
      },
      {
        path: "program-icu-admin",
        component: ProgramIcuAdminComponent,
      },
      {
        path: "banner-icu-admin",
        component: BannerIcuAdminComponent,
      },
    ],
  },
];
