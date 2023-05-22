import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EntrepriseService } from '../../services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from 'src/app/shared/services/alert.service';
import { MatSort } from '@angular/material/sort';
import { DatatableComponent } from 'src/app/shared/components/datatable/datatable.component';
import { FicheDePayeModel } from 'src/app/shared/models/fiche_de_paye.model';

@Component({
  selector: 'app-fiche-de-paye-entreprise',
  templateUrl: './fiche-de-paye-entreprise.component.html',
  styleUrls: ['./fiche-de-paye-entreprise.component.css']
})
export class FicheDePayeEntrepriseComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('datatable') datatable!: DatatableComponent; //Création d'une instance du component datatable ici

  destroy$!: Subject<boolean>;


  loading$: Observable<boolean>; //Vérifier que les données ont bien été chargé
  fiche_de_payes! : FicheDePayeModel[]; //Liste des fiches
  
  columns: string[] = ['titre_offre','nom_interimaire','date_debut_mission', 'date_fin_mission','salaire_offre','nbr_heure_effectuees','montant_paiement','date_paiement']; //Clé d'api
  displayedColumns: string[]= ['Titre','Nom intérimaire','Début mission','Fin mission', 'Salaire (€)','Nbr heure','Montant total (€)', 'Date paiement']; // Colonne à afficher dans la datatable



  labelDataTable: string = "Liste des paiements";
  /*------------End Datatable----------*/

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entrepriseService: EntrepriseService,

  ) { }

  ngOnInit(): void {
    this.entrepriseService.initSessionSotorage();
    this.destroy$ = new Subject<boolean>();
    this.getFicheDePayes();
 
  }

    //Liste des fiches 
    private getFicheDePayes(){
      this.loading$ = this.entrepriseService.loadingFicheDePaye$
   
      this.entrepriseService.fiche_de_payes$.pipe(
        takeUntil(this.destroy$),
        tap((data) => {
          this.fiche_de_payes = data;
        }
        )
      ).subscribe();
    }
  
   
      //Destruction des souscriptions
      ngOnDestroy(): void {
        this.destroy$.next(true);
      }

}
