import { AfterViewInit, Component, Input, OnInit, ViewChild, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator; //Pour accéder aux instances de la
  @ViewChild(MatSort) sort!: MatSort;


  @Input() data: any[];
  dataSource = new MatTableDataSource<any>;

  /*
  *Stock les noms des colonnes (les clés du tableau json reçu )
  Ex:
  {
    "id":1
  }
  il stockera id
  */
  @Input() columns: string[]; //Les clé du json reçu
  @Input() displayedColumns: string[]; //Les noms des colonnes à afficher dans le template

  @Input() labelDataTable: string; // Texte annoncateur. Ex: Liste des offres

  /*
  * Liste des actions à effectuer
  * On reçoit le label et la méthode à exécuter
  * On aura donc un sous menu du dropdown comportant plusieurs 
  * lien qui exécute une méthode
  * Précision: Dans les pages qui feront appel à ce component, 
  * il faut toujours normé le champs qui représente les actions actions
  * Car une conditions est fait sur ça dans le template
  * action: (params: any) => void signifie qu'on recevra une fonction en paramètre de type void
  */
  @Input() actions: { label: string, action: (params: any) => void }[];

  /*
  * Liste des boutons à exécuter 
  * On reçoit le label, la couleur du bouton et la méthode à exécuter
  */
  @Input() buttonsAction: { label: string, color: string, action: (params: any) => void }[];

  /*
  * Liste des bages ou status:
  * On reçoit le code le label, et la couleur
  * 
  */
  @Input() badges: { code: number, label: string, color: string }[] = [];
  //On doit préciser le nom de la colonne que porte le champs status, dans notre cas, status_mission
  //Car ce champs n'est pas renseigné dans la variable columns mais plutôt badges qui est renseigné
  //C'est utilisé uniquement pour la gestion des status (badges)
  @Input() columnStatusName: string;

  //Pagination
  @Input() pageSizeOptions: number[]; //La taille de la page à afficher
  @Input() defaultPageSize: number; // La taille de la page par défaut
  @Input() defaultSort: MatSort; //Pour spécifier le tri par défaut




  ngAfterViewInit() {
    //Initialisation de la pagination
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  ngOnInit() {
    //Initialisation des données
    this.dataSource.data = this.data;
    if (this.defaultSort) {
      this.dataSource.sort = this.defaultSort;
    }
  }

  //Ajout d'un élément en haut  dans la datatable
  addElement(element: any) {
    this.dataSource.data.unshift(element);
    this.dataSource._updateChangeSubscription();
  }

  //Mise à jour d'un element de la datatable
  updateElement(oldElement: any, newElement: any) {
    // On récupère l'index de l'élément à modifier
    const index = this.dataSource.data.indexOf(oldElement);
    //Si l'index existe
    if (index > -1) {
      //On met à jour l'élement
      for (let i in this.columns) {
        this.dataSource.data[index][this.columns[i]] = newElement[this.columns[i]];

      }
    }
  }
  //Suppression d'un élément de la datatable
  removeElement(element: any) {
    const index = this.dataSource.data.indexOf(element);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
    }
  }

  /*----Gestion des badges ( ou status) -----*/

  getStatusLabel(status: number, mappings: { code: number, label: string, color: string }[]): string {

    const matchingStatus = mappings.find(mapping => mapping.code === status);

    return matchingStatus ? matchingStatus.label : '';
  }

  getBadgeColor(status: number, mappings: { code: number, label: string, color: string }[]): string {
    const matchingStatus = mappings.find(mapping => mapping.code === status);
    return matchingStatus ? matchingStatus.color : '';
  }

  /*------- End gestion des badges -------*/
}
