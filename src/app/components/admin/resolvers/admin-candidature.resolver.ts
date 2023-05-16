import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable()
export class AdminCandidatureResolver implements Resolve<boolean> {
  var_bool: boolean=false;
  offreId! : number;

  constructor( private adminService: AdminService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.offreId = route.params['id_offre'];
    
    //Si id offre passé en paramètre de la route, alors on récupère les canditures par offre, si non, par entreprise
   this.offreId ? this.adminService.getCandidaturesByOffre(this.offreId) : this.adminService.getCandidatures();

     this.adminService.loadingCandidature$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
