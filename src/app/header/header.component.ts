import { Component, OnInit, Input } from '@angular/core';
import {LoginServiceService} from '../login-service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  @Input() count:number;
  constructor(public myLoginServiceService: LoginServiceService,  public router: Router) 
  {}

  ngOnInit() {
  }
  logOut(){
    this.myLoginServiceService.logout()
    .subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
      this.router.navigate(['/']);
    });
  }
}
