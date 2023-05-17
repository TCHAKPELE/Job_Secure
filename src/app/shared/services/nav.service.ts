import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
	public fullScreen = false;

	constructor() {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?:any) {
		this.screenWidth = window.innerWidth;
	}
	//Affiche ceci en cas d'erreur
	MENUITEMS: Menu[] = [
		{
			title: "Sample Page",
			icon: "buttons",
			type: "sub",
			active: true,
			children: [
			  { path: "/sample-page/sample-page1", title: "sample-page-1", type: "link" },
			  { path: "/sample-page/sample-page2", title: "sample-page-2", type: "link" },
			],
		 },
		 { path: "/sample-page3", icon: "buttons", title: "sample-page-3", type: "link" },
	];

	//Intérimaire

	MENU_INTERIAMRE: Menu[] = [
		{
			title: "Tableau de bord",
			icon: "home",
			type: "sub",
			active: true,
			children: [
			  { path: "interimaire/offres", title: "Offres", type: "link" },
			  { path: "interimaire/candidatures", title: "Candidatures", type: "link" },
			  { path: "interimaire/missions", title: "Missions", type: "link" },
			  { path: "interimaire/fiche_de_paye", title: "Fiches de paye", type: "link" },
			],
		}
	];

	//Entreprise
	MENU_ENTREPRISE: Menu[] = [
		{
			title: "Tableau de bord",
			icon: "home",
			type: "sub",
			active: true,
			children: [
			  { path: "dashboard/entreprise", title: "Offres", type: "link" },
			  { path: "dashboard/entreprise/missions", title: "Missions", type: "link" },
			  { path: "dashboard/entreprise/candidatures", title: "Candidatures", type: "link" },
			  { path: "dashboard/entreprise/fiche_de_paye", title: "Fiches de paye", type: "link" },
			],
		}
	];

	//Admin
	MENU_ADMIN: Menu[] = [
		{
			title: "Tableau de bord",
			icon: "home",
			type: "sub",
			active: true,
			children: [
			  { path: "dashboard/admin/offres", title: "Offres", type: "link" },
			  { path: "dashboard/admin/missions", title: "Missions", type: "link" },
			  { path: "dashboard/admin/candidatures", title: "Candidatures", type: "link" },
			],
		},
		{
			title: "Compte",
			icon: "users",
			type: "sub",
			active: true,
			children: [
			  { path: "dashboard/admin/entreprises", title: "Entreprise", type: "link" },
			  { path: "dashboard/admin/interimaires", title: "Intérimaire", type: "link" },
			  { path: "dashboard/admin/entreprises/non_valide", title: "Nouvelles entreprises", type: "link" },
			  { path: "dashboard/admin/interimaires/non_valide", title: "Nouveaux intérimaires", type: "link" },
			],
		}
	]
	// Array
	//items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

	getItems(type_compte: string){
		if(type_compte == environment.entreprise) return new BehaviorSubject<Menu[]>(this.MENU_ENTREPRISE);
		if(type_compte == environment.interimaire) return new BehaviorSubject<Menu[]>(this.MENU_INTERIAMRE);
		if(type_compte == environment.admin) return new BehaviorSubject<Menu[]>(this.MENU_ADMIN);
		
		return new BehaviorSubject<Menu[]>(this.MENUITEMS);
		
	}

}
