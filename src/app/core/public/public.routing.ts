import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SoalanLazimComponent } from "./soalan-lazim/soalan-lazim.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

export const PublicRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent,
      },
      {
        path: "soalan-lazim",
        component: SoalanLazimComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
    ],
  },
];
