import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { EntrepriseService } from '../services/entreprise.service';

@Injectable()
export class CandidatureResolver implements Resolve<boolean> {
  var_bool: boolean=false;
  offreId! : number;

  constructor( private entepriseService: EntrepriseService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.offreId = route.params['id_offre'];
    
    //Si id offre passé en paramètre de la route, alors on récupère les canditures par offre, si non, par entreprise
   this.offreId ? this.entepriseService.getCandidaturesByOffre(this.offreId) : this.entepriseService.getCandidaturesByEntreprise();

     this.entepriseService.loadingCandidature$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}