import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
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
			title: "Dashboard",
			icon: "home",
			type: "sub",
			active: true,
			children: [
			  { path: "interimaire/profile", title: "Profile", type: "link" },
			  { path: "/sample-page/sample-page2", title: "sample-page-2", type: "link" },
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
			],
		}
	]
	// Array
	//items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

	getItems(type_compte: string){
		if(type_compte == environment.entreprise) return new BehaviorSubject<Menu[]>(this.MENU_ENTREPRISE);
		
	
		return;
		
	}

}
