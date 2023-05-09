import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  pathUrl: string = environment.apiUrl;
  idCompte!: number;
  
  constructor(private http: HttpClient,
    private router: Router,) {
    this.initSessionSotorage();
   }

   //Vérification de la session de l'user
   initSessionSotorage() {
    if (typeof (sessionStorage) !== "undefined") {
      const userSession = sessionStorage.getItem('user');
      if (userSession != null) {
        const user = JSON.parse(userSession);
        if (user.type_utilisateur == environment.entreprise) {
          this.idCompte = user.id_compte;
        } else {
          this.accesInterdit();
        }
        
      }else {
        this.accesInterdit();
      }

    }
  }

  private accesInterdit() {
    sessionStorage.removeItem("user");
    this.router.navigateByUrl(`login`);
    return;
  }

  /*------- Offre ---------*/
  private _loadingOffre$ = new BehaviorSubject<boolean>(false);

  get loadingOffre(): Observable<boolean> {
    return this._loadingOffre$.asObservable();
  }

  private setLoadingOffre(loading: boolean) {
    this._loadingOffre$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _offre$ = new BehaviorSubject<OffreModel[]>([]);
  //getters
  get offre$(): Observable<OffreModel[]> {
    return this._offre$.asObservable();
  }  

  //Add offre
  addOffre(formValue: OffreModel): Observable<any>{
    return this.http.post<OffreModel>(`${this.pathUrl}/offre`,formValue);
  }


  /*------- End offre ---------*/
}
