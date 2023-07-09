import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: LoginService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (typeof (sessionStorage) !== "undefined") {
        const userSession = sessionStorage.getItem('user');
        if (userSession != null) {
            return true;
        }
        else{
            this.router.navigateByUrl('/login');
            return false; 
        }
    }
    else{
        this.router.navigateByUrl('/login');
            return false; 
    }

  }
}