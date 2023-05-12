import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterimaireService {
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
        if (user.type_utilisateur == environment.interimaire) {
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
   // return;
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
  

  
    //Récupérer offre  
    getOffres() {
      this.setLoadingOffre(true);
      this.http.get<OffreModel[]>(`${this.pathUrl}/offres`).pipe(
        tap(offres => {
          this._offres$.next(offres);
          this.setLoadingOffre(false);
        })
      ).subscribe();
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

  //Liste des candidatures par interimaire
  getCandidaturesByInterimaire() {
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/${this.idCompte}/interimaire`).pipe(
      tap(candidatures => {
        this._candidatures$.next([]); //Vider d'abord la variable vu que c'est également utiliser par la fonction getCandidaturesByOffre
        this._candidatures$.next(candidatures);
        this.setLoadingCandidature(false);
      })
    ).subscribe();
  }

  //Postuler à une candidature

  postulerCandidature(element: any): Observable<any>{
    return this.http.post<any>(`${this.pathUrl}/candidature`, element);
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
  
    // Liste des misisons par offre
    getMissionByInterimaire() {
      this.setLoadingMission(true);
      console.log(this.idCompte);
      
      this.http.get<MissionModel[]>(`${this.pathUrl}/missions/${this.idCompte}/interimaire`).pipe(
        tap(missions => {
          this._missions$.next([]); //Vider d'abord la variable
          this._missions$.next(missions);
          this.setLoadingMission(false);
        })
      ).subscribe();
    }
  

  
  
    /*-------- End mission ---------*/
}
