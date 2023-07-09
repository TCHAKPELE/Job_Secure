import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { of, Subject, throwError } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;
  let toastrService: ToastrService;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [LoginService, ToastrService, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService);
    toastrService = TestBed.inject(ToastrService);
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.get('identifiant')).toBeDefined();
    expect(component.loginForm.get('password')).toBeDefined();
  });

  it('should call verifyUser method and redirect user', () => {
    const user: any = {
      id: 1,
      identifiant: 'testuser',
      mot_de_passe: 'password',
      type_utilisateur: environment.interimaire,
      activation_compte: 1,
      status_compte: 0
    };
    spyOn(component, 'redirect_user_to_account');

    const verifyUserSpy = spyOn(loginService, 'verifyUser').and.returnValue(of({ status: 200, user: user }));

    component.loginForm.setValue({ identifiant: 'testuser', password: 'password' });
    component.onSubmitForm();

    expect(verifyUserSpy).toHaveBeenCalled();
    expect(component.redirect_user_to_account).toHaveBeenCalledWith(user.type_utilisateur, user.activation_compte);
  });

  it('should display error toastr when authentication fails', () => {
    spyOn(component, 'dangerToastr');

    const verifyUserSpy = spyOn(loginService, 'verifyUser').and.returnValue(of({ status: 400, message: 'Authentication failed' }));

    component.loginForm.setValue({ identifiant: 'testuser', password: 'password' });
    component.onSubmitForm();

    expect(verifyUserSpy).toHaveBeenCalled();
    expect(component.dangerToastr).toHaveBeenCalledWith('Authentication failed');
  });

  it('should display error toastr when server is unreachable', () => {
    spyOn(component, 'dangerToastr');
  
    const verifyUserSpy = spyOn(loginService, 'verifyUser').and.returnValue(throwError({ message: 'Server error' }));
  
    component.loginForm.setValue({ identifiant: 'testuser', password: 'password' });
    component.onSubmitForm();
  
    expect(component.dangerToastr).toHaveBeenCalledWith("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si cela persiste, veuillez contacter le support");
  });
  

  it('should redirect user to corresponding account', () => {
    const router = TestBed.inject(Router); // Inject the Router
    spyOn(router, 'navigateByUrl');
  
    component.redirect_user_to_account(environment.interimaire, 1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('interimaire/offres');
  
    component.redirect_user_to_account(environment.entreprise, 1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('dashboard/entreprise');
  
    component.redirect_user_to_account(environment.admin, 1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('dashboard/admin');
  });

  it('should display error toastr when user redirection fails', () => {
    spyOn(component, 'dangerToastr');

    component.redirect_user_to_account('unknown', 1);

    expect(component.dangerToastr).toHaveBeenCalledWith("Impossible de rediriger vers l'espace correspondant. Veuillez joindre le support informatique");
  });

  it('should display error toastr on server error', () => {
    spyOn(component, 'dangerToastr');

    const verifyUserSpy = spyOn(loginService, 'verifyUser').and.returnValue(throwError('Server error'));

    component.loginForm.setValue({ identifiant: 'testuser', password: 'password' });
    component.onSubmitForm();

    expect(verifyUserSpy).toHaveBeenCalled();
    expect(component.dangerToastr).toHaveBeenCalledWith("Impossible d'atteindre le serveur d'authentification. Veuillez vérifier votre connexion internet, si cela persiste, veuillez contacter le support");
  });
});
