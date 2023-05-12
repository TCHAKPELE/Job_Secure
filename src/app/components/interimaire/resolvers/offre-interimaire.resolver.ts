import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { InterimaireService } from '../services/interimaire.service';

@Injectable()
export class OffreInterimaireResolver implements Resolve<boolean> {
  var_bool: boolean=false;

  constructor( private interimaireService: InterimaireService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.interimaireService.getOffres();

     this.interimaireService.loadingOffre$.pipe(
      map(sta => this.var_bool == sta
      ),
    ).subscribe();
  
    return of(this.var_bool);
  }
}
