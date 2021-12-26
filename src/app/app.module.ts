import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AdminfooterComponent } from './components/adminlayout/adminfooter/adminfooter.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';
import { LoginComponent } from './components/adminlayout/admin/login/login.component';
import { RegisterComponent } from './components/adminlayout/admin/register/register.component';
import { ForgetPasswordComponent } from './components/adminlayout/admin/forget-password/forget-password.component';
import { RecoverPasswordComponent } from './components/adminlayout/admin/recover-password/recover-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminfooterComponent,
    AdminheaderComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    RecoverPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
