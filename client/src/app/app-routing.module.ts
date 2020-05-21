import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {SiteLayoutComponent} from "./shared/layouts/site-layout/site-layout.component";

const routes: Routes=[
  {
    path:'',component:AuthLayoutComponent,children :[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent}
    ]
  },
  {
    path:'api',component:SiteLayoutComponent,children :[

    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule {

}
