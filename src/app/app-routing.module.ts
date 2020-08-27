import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SystemLayoutComponent } from './layouts/system-layout/system-layout.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: '',
    component: SystemLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./core/public/public.module').then(m => m.PublicModule)
      },
      {
        path: 'admin',
        loadChildren:() => import('./core/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'agency',
        loadChildren:() => import('./core/agency/agency.module').then(m => m.AgencyModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
