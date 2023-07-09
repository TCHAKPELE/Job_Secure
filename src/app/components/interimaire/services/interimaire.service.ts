import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CandidatureModel } from 'src/app/shared/models/candidature.model';
import { FicheDePayeModel } from 'src/app/shared/models/fiche_de_paye.model';
import { InterimaireModel } from 'src/app/shared/models/interimaire.model';
import { MissionModel } from 'src/app/shared/models/mission.model';
import { OffreModel } from 'src/app/shared/models/offre.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterimaireService {

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
        if (user.type_utilisateur == environment.interimaire) {
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
    this.http.get<FicheDePayeModel[]>(`${this.pathUrl}/fiches/${this.idCompte}/interimaire`).pipe(
      tap(fiche_de_payes => {
        this._fiche_de_payes$.next([]); //Vider d'abord la variable
        this._fiche_de_payes$.next(fiche_de_payes);
        this.setLoadingFicheDePaye(false);
      })
    ).subscribe();
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
      private _profile$ = new BehaviorSubject<InterimaireModel[]>([]);
      //getters
      get profile$(): Observable<InterimaireModel[]> {
        return this._profile$.asObservable();
      }
      getProfileInfo(){
       this.setLoadingProfile(true);
       return this.http.get<InterimaireModel[]>(`${this.pathUrl}/interimaire/${this.idCompte}`).pipe(
         tap(profile => {
           
           this._profile$.next(profile);
           this.setLoadingProfile(false);
         })
       ).subscribe();
      }
   
      updateProfileInfo(formValue: any): Observable<InterimaireModel>{
        
        let formData: FormData = new FormData();
        formData.append("nom", formValue.nom);
        formData.append("prenom", formValue.prenom);
        formData.append("telephone_interimaire", formValue.telephone_interimaire);
        formData.append("adresse_interimaire", formValue.adresse_interimaire);
        formData.append("email", formValue.email);
        formData.append("iban", formValue.iban);
        formValue.cv != ""? formData.append('cv', formValue.cv, formValue.cv.name): formData.append("cv","");
    
        
       return this.http.post<any>(`${this.pathUrl}/interimaire/${this.idCompte}`, formData);
      }

      /*---------- End profile ---------*/
      //Plainte
      porterPlaine(formValue: any) : Observable<any>{
        return this.http.post<any>(`${this.pathUrl}/plainte`, formValue)
      }
}
