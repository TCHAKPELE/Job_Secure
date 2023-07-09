import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { EntrepriseModel } from 'src/app/shared/models/entreprise.model';
import { FicheDePayeModel } from 'src/app/shared/models/fiche_de_paye.model';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class EntrepriseService {
  pathUrl: string = environment.apiUrl;
  idCompte!: number;
  type_utilisateur!: string;

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
          this.type_utilisateur = user.type_utilisateur;
        } else {
          this.accesInterdit();
        }

      } else {
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
  addOffre(formValue: OffreModel): Observable<any> {
    return this.http.post<OffreModel>(`${this.pathUrl}/offre`, formValue);
  }

  //Récupérer offre

  getOffres() {
    this.setLoadingOffre(true);
    this.http.get<OffreModel[]>(`${this.pathUrl}/offres/${this.idCompte}`).pipe(
      tap(offres => {
        this._offres$.next(offres);
        this.setLoadingOffre(false);
      })
    ).subscribe();
  }

  //UpdateOffre
  updateOffre(idOffre: number, element: OffreModel): Observable<any> {

    return this.http.put<any>(`${this.pathUrl}/offre/${idOffre}`, element);
  }


  //Delete offre
  deleteOffre(idOffre: number): Observable<any> {
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
  getCandidaturesByEntreprise() {
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/${this.idCompte}/entreprise`).pipe(
      tap(candidatures => {
        this._candidatures$.next([]); //Vider d'abord la variable vu que c'est également utiliser par la fonction getCandidaturesByOffre
        this._candidatures$.next(candidatures);
        this.setLoadingCandidature(false);
      })
    ).subscribe();
  }

  //Liste des candidatures par offre
  getCandidaturesByOffre(idOffre: number) {
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/${idOffre}/offre`).pipe(
      tap(candidatures => {
        this._candidatures$.next([]); //Vider d'abord la variable
        this._candidatures$.next(candidatures);
        this.setLoadingCandidature(false);
      })
    ).subscribe();

  }

  //Accepter candidature
  accepterCandidature(idCandidature: number): Observable<boolean> {

    return this.http.get<any>(`${this.pathUrl}/candidature/${idCandidature}/acceptation`);
  }
  /*-------- End candidature --------*/

  /*------- Mission -------------*/

  private _loadingMission$ = new BehaviorSubject<boolean>(false);

  get loadingMission$(): Observable<boolean> {
    return this._loadingMission$.asObservable();
  }

  private setLoadingMission(loading: boolean) {
    this._loadingMission$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _missions$ = new BehaviorSubject<MissionModel[]>([]);
  //getters
  get missions$(): Observable<MissionModel[]> {
    return this._missions$.asObservable();
  }

  // Liste des misisons par entreprise
  getMissionByEntreprise() {
    this.setLoadingMission(true);
    this.http.get<MissionModel[]>(`${this.pathUrl}/missions/${this.idCompte}/entreprise`).pipe(
      tap(missions => {
        this._missions$.next([]); //Vider d'abord la variable
        this._missions$.next(missions);
        this.setLoadingMission(false);
      })
    ).subscribe();
  }

  // Liste des misisons par offre
  getMissionByOffre(idOffre: number) {
    this.setLoadingMission(true);
    this.http.get<MissionModel[]>(`${this.pathUrl}/missions/${idOffre}/offre`).pipe(
      tap(missions => {
        this._missions$.next([]); //Vider d'abord la variable
        this._missions$.next(missions);
        this.setLoadingMission(false);
      })
    ).subscribe();
  }

  //Cloturer ou suspendre mission

  changerStatusMission(idMission: number, status: number): Observable<boolean> {
    return this.http.get<any>(`${this.pathUrl}/mission/${idMission}/${status}`);
  }

  //Noter intérimaire
  noterInterimaire(formValue): Observable<any>{
    return this.http.post<any>(`${this.pathUrl}/mission_note`, formValue);
  }

  /*-------- End mission ---------*/

  /*---------- Fiche de Paye ------------*/

  private _loadingFicheDePaye$ = new BehaviorSubject<boolean>(false);

  get loadingFicheDePaye$(): Observable<boolean> {
    return this._loadingFicheDePaye$.asObservable();
  }

  private setLoadingFicheDePaye(loading: boolean) {
    this._loadingFicheDePaye$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _fiche_de_payes$ = new BehaviorSubject<FicheDePayeModel[]>([]);
  //getters
  get fiche_de_payes$(): Observable<FicheDePayeModel[]> {
    return this._fiche_de_payes$.asObservable();
  }
  getFicheDePaye() {
    this.setLoadingFicheDePaye(true);
    this.http.get<FicheDePayeModel[]>(`${this.pathUrl}/fiches/${this.idCompte}/entreprise`).pipe(
      tap(fiche_de_payes => {
        this._fiche_de_payes$.next([]); //Vider d'abord la variable
        this._fiche_de_payes$.next(fiche_de_payes);
        this.setLoadingFicheDePaye(false);
      })
    ).subscribe();
  }
  //Générer fiche de paye
  genererFicheDePaye(formValue): Observable<any>{
    return this.http.post<any>(`${this.pathUrl}/fiche`, formValue);
  }

   /*---------- End Fiche de Paye ------------*/

   /*------- Profile --------------*/

   private _loadingProfile$ = new BehaviorSubject<boolean>(false);

   get loadingProfile$(): Observable<boolean> {
     return this._loadingProfile$.asObservable();
   }
 
   private setLoadingProfile(loading: boolean) {
     this._loadingProfile$.next(loading);
   }
 
   //Contiendra la donnée reçu depuis le serveur
   private _profile$ = new BehaviorSubject<EntrepriseModel[]>([]);
   //getters
   get profile$(): Observable<EntrepriseModel[]> {
     return this._profile$.asObservable();
   }
   getProfileInfo(){
    this.setLoadingProfile(true);
    return this.http.get<EntrepriseModel[]>(`${this.pathUrl}/entreprise/${this.idCompte}`).pipe(
      tap(profile => {
        
        this._profile$.next(profile);
        this.setLoadingProfile(false);
      })
    ).subscribe();
   }

   updateProfileInfo(formValue: any): Observable<EntrepriseModel>{
    return this.http.put<any>(`${this.pathUrl}/entreprise/${this.idCompte}`, formValue)
   }
   
      /*---------- End profile ---------*/

         //Plainte
         porterPlaine(formValue: any) : Observable<any>{
          return this.http.post<any>(`${this.pathUrl}/plainte`, formValue)
        }
}
