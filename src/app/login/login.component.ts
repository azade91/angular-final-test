import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {LoginServiceService} from '../login-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoggedIn: boolean;
  responseResult:string="";
  constructor(private formBuilder: FormBuilder ,  public myLoginServiceService: LoginServiceService,  public router: Router) 
  {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mobileNum: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // public errorHandling = (control: string, error: string) => {
  //   return this.loginForm.controls[control].hasError(error);
  // }

  test(){
   

    this.responseResult="";
    this.myLoginServiceService.login()
    .subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
     
      let redirect = this.myLoginServiceService.redirectUrl ? this.myLoginServiceService.redirectUrl :'/home';
      this.router.navigate([redirect]);
  });
  }
  onSubmit() {
  
     if (this.loginForm.valid) {
       if(this.loginForm.controls.mobileNum.value === "09120450115" && this.loginForm.controls.password.value==="123")
       {
          this.responseResult="";
          this.myLoginServiceService.login()
          .subscribe((isLoggedIn) => {
            this.isLoggedIn = isLoggedIn;
           
            let redirect = this.myLoginServiceService.redirectUrl ? this.myLoginServiceService.redirectUrl :'/home';
            this.router.navigate([redirect]);
        });
       }
       else
       {
          this.responseResult="invalid mobile number or password";
       }
      // this.LoginServiceService.isLoggedIn=true;
      // this.LoginServiceService.login().subscribe((isLoggedIn) => {
      //     this.isLoggedIn = isLoggedIn;
      //     let redirect = this.LoginServiceService.redirectUrl ? this.LoginServiceService.redirectUrl :'/home';
      //     this.router.navigate([redirect]);
      // });
   }
   
}


}
