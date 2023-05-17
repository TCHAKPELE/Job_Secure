import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-validation-en-cours',
  templateUrl: './validation-en-cours.component.html',
  styleUrls: ['./validation-en-cours.component.scss'],
})
export class ValidationEnCoursComponent  implements OnInit  {
  user!: UserModel;
  interimaire: string= environment.interimaire;
  entreprise: string= environment.entreprise;
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
    if (this.loginService.user) this.user= this.loginService.user
    else this.router.navigateByUrl("login");
    
  }


}
