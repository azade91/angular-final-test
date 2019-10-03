import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
  redirectUrl: string;
  constructor(private router: Router) { }
  login(): Observable<boolean> {
    this.isLoggedIn.next(true);
    return this.isLoggedIn$;
  }
  logout(): Observable<boolean> {
    this.isLoggedIn.next(false);
    return this.isLoggedIn$;
  }


//   isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
//   isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();
//   redirectUrl: string;
// // constructor(){}
//   constructor(private router: Router) { }

//   login(): Observable<boolean> {
//     this.isLoggedIn.next(true);
//     return this.isLoggedIn$;
//   }


  
//   // login(){
//   //   this.isLoggedIn=true;
//   //   return this.isLoggedIn;
//   // }



//   // }
}


