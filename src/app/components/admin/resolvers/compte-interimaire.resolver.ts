import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable()
export class CompteInterimaireResolver implements Resolve<boolean> {
  var_bool: boolean=false;
  statusDemande! : string;

  constructor( private adminService: AdminService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.statusDemande = route.params['statusDemande']; // valide pour récupérer les comptes validé, non_valide pour invalidé
    
    //Si  route à un paramètre, alors on récupère les comptes non valides
   this.statusDemande ? this.adminService.getComptesInterimaireNonValider() :  this.adminService.getComptesInterimaireValider() ;

     this.adminService.loadingInterimaire$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
