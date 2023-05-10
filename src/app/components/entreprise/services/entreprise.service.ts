import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
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

  get loadingOffre$(): Observable<boolean> {
    return this._loadingOffre$.asObservable();
  }

  private setLoadingOffre(loading: boolean) {
    this._loadingOffre$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _offres$ = new BehaviorSubject<OffreModel[]>([]);
  //getters
  get offres$(): Observable<OffreModel[]> {
    return this._offres$.asObservable();
  }  

  //Add offre
  addOffre(formValue: OffreModel): Observable<any>{
    return this.http.post<OffreModel>(`${this.pathUrl}/offre`,formValue);
  }

  //Récupérer offre

  getOffres(){
    this.setLoadingOffre(true);
       this.http.get<OffreModel[]>(`${this.pathUrl}/offres/${this.idCompte}`).pipe(
        tap(offres=>{
            this._offres$.next(offres);
            this.setLoadingOffre(false);          
        })
      ).subscribe();
  }

  //UpdateOffre
  updateOffre(idOffre: number, element: OffreModel) : Observable<any>{

    return this.http.put<any>(`${this.pathUrl}/offre/${idOffre}`, element); 
  }


  //Delete offre
  deleteOffre(idOffre: number) : Observable<any>{
    return this.http.delete<any>(`${this.pathUrl}/offre/${idOffre}`);
  }

  /*------- End offre ---------*/


  /*-------- Candidature ---------*/
  private _loadingCandidature$ = new BehaviorSubject<boolean>(false);

  get loadingCandidature$(): Observable<boolean> {
    return this._loadingCandidature$.asObservable();
  }

  private setLoadingCandidature(loading: boolean) {
    this._loadingCandidature$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _candidatures$ = new BehaviorSubject<CandidatureModel[]>([]);
  //getters
  get candidatures$(): Observable<CandidatureModel[]> {
    return this._candidatures$.asObservable();
  }  

  //Liste des candidatures par entreprise
  getCandidaturesByEntreprise(){
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/${this.idCompte}/entreprise`).pipe(
     tap(candidatures=>{
         this._candidatures$.next(candidatures);
         this.setLoadingCandidature(false);          
     })
   ).subscribe();
  }

  //Liste des candidatures par offre
  getCandidaturesByOffre(){
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/${this.idCompte}/offre`).pipe(
     tap(candidatures=>{
         this._candidatures$.next(candidatures);
         this.setLoadingCandidature(false);          
     })
   ).subscribe();
  }
  /*-------- End candidature --------*/
}
