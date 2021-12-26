import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/adminlayout/admin/forget-password/forget-password.component';
import { LoginComponent } from './components/adminlayout/admin/login/login.component';
import { RecoverPasswordComponent } from './components/adminlayout/admin/recover-password/recover-password.component';
import { RegisterComponent } from './components/adminlayout/admin/register/register.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'forget-password', component:ForgetPasswordComponent},
  {path:'recover-password', component:RecoverPasswordComponent},
  {path:'login', component:LoginComponent},
  {path:"admin", component:AdminlayoutComponent, children:[
    {path:"",component:DashboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
