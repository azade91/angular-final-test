import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from './auth.gaurd';
import {LoginServiceService} from './login-service.service'


const routes: Routes = [
  {path: '', component: LoginComponent },
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginServiceService, AuthGuard]
})
export class AppRoutingModule { }
