import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  constructor(private authServ:AuthService){
    this.authServ.setNomPage("Accueil");
  }
}
