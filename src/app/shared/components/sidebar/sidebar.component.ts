import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  public menuItems: Menu[] | any;
  public url: any;
  public fileurl: any;

  public type_utilisateur!: string;

  public username!:string;

  constructor(private router: Router, public navServices: NavService) {
    this.initSessionSotorage();
    this.navServices.getItems(this.type_utilisateur)!.subscribe(menuItems => {
      this.menuItems = menuItems
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
              if (subItems.path === event.url)
                this.setNavActive(subItems)
              if (!subItems.children) return false
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url)
                  this.setNavActive(subSubItems)
              })
              return
            })
            return
          }
          )
        }
      })
    })
  }

  private initSessionSotorage(){
    if(typeof(sessionStorage) !== "undefined"){
      const userSession =  sessionStorage.getItem('user');
      if(userSession != null)
      {        
        const user= JSON.parse(userSession);
        this.type_utilisateur=user.type_utilisateur;
        this.username= this.type_utilisateur == environment.interimaire ? user.nom+" "+ user.prenom : user.nom;
      }
      else{
        this.router.navigateByUrl("login");
      }
       
    }
  }

  // Active Nave state
  setNavActive(item:any) {
    this.menuItems.filter((menuItem:any) => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter((submenuItems:any) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
        return
      });
    }
    item.active = !item.active
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

  

}
