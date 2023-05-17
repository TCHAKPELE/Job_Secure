import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { EntrepriseService } from '../services/entreprise.service';

@Injectable()
export class EntrepriseFichePayeResolver implements Resolve<boolean> {
  var_bool: boolean=false;
  offreId! : number;

  constructor( private entepriseService: EntrepriseService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.entepriseService.getFicheDePaye();

     this.entepriseService.loadingFicheDePaye$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
