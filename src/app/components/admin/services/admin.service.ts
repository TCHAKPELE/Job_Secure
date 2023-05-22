import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { EntrepriseModel } from 'src/app/shared/models/entreprise.model';
import { InterimaireModel } from 'src/app/shared/models/interimaire.model';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminService {
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
        if (user.type_utilisateur == environment.admin) {

          this.idCompte = user.id;
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

  //Valider compte utilisateur

  validerCompte(element: any): Observable<boolean> {
    return this.http.post<any>(`${this.pathUrl}/admin/valider_compte`, element);
  }

  /*------- Compte Entreprise ---------*/

  private _loadingEntreprise$ = new BehaviorSubject<boolean>(false);

  get loadingEntreprise$(): Observable<boolean> {
    return this._loadingEntreprise$.asObservable();
  }

  private setLoadingEntreprise(loading: boolean) {
    this._loadingEntreprise$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _entreprises$ = new BehaviorSubject<EntrepriseModel[]>([]);
  //getters
  get entreprises$(): Observable<EntrepriseModel[]> {
    return this._entreprises$.asObservable();
  }

  //Récupérer compte entreprise non validé  
  getComptesEntrepriseNonValider() {
    this.setLoadingEntreprise(true);
    this.http.get<EntrepriseModel[]>(`${this.pathUrl}/admin/entreprises_non_valides`).pipe(
      tap(entreprises => {
        this._entreprises$.next(entreprises);
        this.setLoadingEntreprise(false);
      })
    ).subscribe();
  }

  //Récupérer compte entreprise  validé  
  getComptesEntrepriseValider() {
    this.setLoadingEntreprise(true);
    this.http.get<EntrepriseModel[]>(`${this.pathUrl}/admin/entreprises_valides`).pipe(
      tap(entreprises => {
        this._entreprises$.next(entreprises);
        this.setLoadingEntreprise(false);
      })
    ).subscribe();
  }

  //Récupérer compte interimaire non validé  


  /*------- End compte entreprise ---------*/


  /*--------- Compte intérimaire -----------*/
  private _loadingInterimaire$ = new BehaviorSubject<boolean>(false);

  get loadingInterimaire$(): Observable<boolean> {
    return this._loadingInterimaire$.asObservable();
  }

  private setLoadingInterimaire(loading: boolean) {
    this._loadingInterimaire$.next(loading);
  }

  //Contiendra la donnée reçu depuis le serveur
  private _interimaires$ = new BehaviorSubject<InterimaireModel[]>([]);
  //getters
  get interimaires$(): Observable<InterimaireModel[]> {
    return this._interimaires$.asObservable();
  }

  getComptesInterimaireNonValider() {
    this.setLoadingInterimaire(true);
    this.http.get<InterimaireModel[]>(`${this.pathUrl}/admin/interimaires_non_valides`).pipe(
      tap(interimaires => {
        this._interimaires$.next(interimaires);
        this.setLoadingInterimaire(false);
      })
    ).subscribe();
  }

  //Récupérer compte intérimaire  validé  
  getComptesInterimaireValider() {
    this.setLoadingInterimaire(true);
    this.http.get<InterimaireModel[]>(`${this.pathUrl}/admin/interimaires_valides`).pipe(
      tap(interimaires => {
        this._interimaires$.next(interimaires);
        this.setLoadingInterimaire(false);
      })
    ).subscribe();
  }

  /*--------- End compte intérimaire -----------*/

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

  //Liste des candidatures 
  getCandidatures() {
    this.setLoadingCandidature(true);
    this.http.get<CandidatureModel[]>(`${this.pathUrl}/candidatures/0/admin`).pipe(
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

  deleteCandidature(idCandidature: number): Observable<boolean> {

    return this.http.delete<any>(`${this.pathUrl}/candidature/${idCandidature}`);
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
  
    // Liste des misisons 
    getMissions() {
      this.setLoadingMission(true);
      this.http.get<MissionModel[]>(`${this.pathUrl}/missions`).pipe(
        tap(missions => {
          this._missions$.next([]); //Vider d'abord la variable
          this._missions$.next(missions);
          this.setLoadingMission(false);
        })
      ).subscribe();
    }
  
    // Liste des misisons par offre
    getMissionsByOffre(idOffre: number) {
      this.setLoadingMission(true);
      this.http.get<MissionModel[]>(`${this.pathUrl}/missions/${idOffre}/offre`).pipe(
        tap(missions => {
          this._missions$.next([]); //Vider d'abord la variable
          this._missions$.next(missions);
          this.setLoadingMission(false);
        })
      ).subscribe();
    }
  
    deleteMission(idMission: number): Observable<boolean> {

      return this.http.delete<any>(`${this.pathUrl}/mission/${idMission}`);
    }
  
  
    /*-------- End mission ---------*/

    /*---------- Plainte -------------*/

    private _loadingPlainte$ = new BehaviorSubject<boolean>(false);

    get loadingPlainte$(): Observable<boolean> {
      return this._loadingPlainte$.asObservable();
    }
  
    private setLoadingPlainte(loading: boolean) {
      this._loadingPlainte$.next(loading);
    }
  
    //Contiendra la donnée reçu depuis le serveur
    private _plaintes$ = new BehaviorSubject<any[]>([]);
    //getters
    get plaintes$(): Observable<any[]> {
      return this._plaintes$.asObservable();
    }

    //Liste des plaintes
    getPlaintes() {
      this.setLoadingPlainte(true);
      this.http.get<any[]>(`${this.pathUrl}/plaintes`).pipe(
        tap(plaintes => {
          this._plaintes$.next(plaintes);
          this.setLoadingPlainte(false);
        })
      ).subscribe();
    }

    reponsePlainte(message: any, id: number){
      return this.http.post<any>(`${this.pathUrl}/reponse_plainte/${id}`, message);
    }
    /*---------- End Plainte -------------*/



}
