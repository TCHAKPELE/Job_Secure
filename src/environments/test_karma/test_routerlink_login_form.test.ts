import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from '../../app/core/components/login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../app/core/services/login.service';
import { ToastrService } from 'ngx-toastr';
import { of, Subject, throwError } from 'rxjs';
import { UserModel } from '../../app/core/models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Directive, Input } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('LoginComponent', () => {
    let fixture: ComponentFixture<LoginComponent>;
    let itemService: any;
  
    // Implémentation de la directive
    @Directive({
      selector: '[routerLink]',
      host: { '(click)': 'onClick()'}
    })
    class RouterLinkDirectiveStub {
      @Input('routerLink') routerLinkValue: any;
      linkValue: any = null;
  
      onClick() {
        this.linkValue = this.routerLinkValue;
      }
    }
  
    beforeEach(() => {
      // Configuration du service injecté dans LoginComponent
      itemService = jasmine.createSpyObj(['addItem', 'getItems']);
      itemService.getItems.and.returnValue([
        { id: 0, id_compte: 1 ,identifiant:'item 0',mot_de_passe:'123',type_utilisateur:'entreprise',status_compte:1,activation_compte:1,nom:'test',prenom:'test',adresse:'test',telephone:'test',email:'testt@turj.com'},
        { id: 1, id_compte: 2 ,identifiant:'item 1',mot_de_passe:'123',type_utilisateur:'entreprise',status_compte:1,activation_compte:1,nom:'test',prenom:'test',adresse:'test',telephone:'test',email:'test@tyy.com'},
        { id: 2, id_compte: 3 ,identifiant:'item 2',mot_de_passe:'123',type_utilisateur:'interimaire',status_compte:1,activation_compte:1,nom:'test',prenom:'test',adresse:'test',telephone:'test',email:'testf@tyy.com'},

      ]);
  
      // Configuration du TestBed
      TestBed.configureTestingModule({
        declarations: [ LoginComponent, RouterLinkDirectiveStub ],
        providers: [
          { provide: LoginService, useValue: itemService }
        ]
      })
  
      fixture = TestBed.createComponent(LoginComponent);
      fixture.detectChanges();
    });
  
    fit('when clicking routerLink then link shall be properly set', () => {    
      // On requête le template pour récupérer les éléments a et les directives RouterLinkDirectiveStub
      let linkElements = fixture.debugElement.queryAll(By.css('a'));
      let routerLinkStubs = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));    
  
      expect(linkElements.length).toBe(4);
      expect(routerLinkStubs.length).toBe(4);
      
      // On ne teste que le premier élément
      let firstLinkElement = linkElements[0];
      let firstRouterLinkStub = routerLinkStubs[0];
      expect(firstRouterLinkStub).toBeTruthy();
  
      // On déclenche un click sur le lien
      firstLinkElement.triggerEventHandler('click', null);
  
      // On vérifie que la route est correcte après click sur le lien
      expect(firstRouterLinkStub.injector.get(RouterLinkDirectiveStub).linkValue).toBe('/detail/0');
    });
  });