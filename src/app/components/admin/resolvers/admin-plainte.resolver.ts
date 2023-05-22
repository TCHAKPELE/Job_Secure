import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AdminPlainteResolver implements Resolve<boolean> {
  var_bool: boolean=false;

  constructor( private adminService: AdminService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.adminService.getPlaintes();

     this.adminService.loadingPlainte$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
