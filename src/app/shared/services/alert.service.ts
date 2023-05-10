import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

constructor(public toastrService: ToastrService) { }

 dangerToastr(msg: string) {
  this.toastrService.error(msg, "Erreur ", { progressBar: true });
}
 succesToastr(msg: string) {
  this.toastrService.success(msg, "Succès ", { progressBar: true });
}
}
