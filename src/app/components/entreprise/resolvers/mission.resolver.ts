import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { EntrepriseService } from '../services/entreprise.service';

@Injectable()
export class MissionResolver implements Resolve<boolean> {
  var_bool: boolean=false;
  offreId! : number;

  constructor( private entepriseService: EntrepriseService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.offreId = route.params['id_offre'];
    
    //Si id offre passé en paramètre de la route, alors on récupère les canditures par offre, si non, par entreprise
   this.offreId ? this.entepriseService.getMissionByOffre(this.offreId) : this.entepriseService.getMissionByEntreprise();

     this.entepriseService.loadingMission$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
