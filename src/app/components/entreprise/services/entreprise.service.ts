import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserModel } from 'src/app/core/models/user.model';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { MissionModel } from 'src/app/shared/models/mission.model';
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


  /*-------- End mission ---------*/
}
