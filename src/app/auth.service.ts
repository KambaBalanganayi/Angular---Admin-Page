import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private etatConnexion:boolean = false;
  estConnecte:BehaviorSubject<boolean>;
  estConnecte$:Observable<boolean>;
  
  nomPage:BehaviorSubject<string>;
  nomPage$:Observable<string>;

  constructor() {
    this.estConnecte = new BehaviorSubject<boolean>(this.etatConnexion);
    this.estConnecte$ = this.estConnecte.asObservable();
    this.nomPage = new BehaviorSubject<string>("");
    this.nomPage$ = this.nomPage.asObservable();

  }
  setNomPage(nom:string){
    if(nom != ""){
      this.nomPage.next(nom);
    }
  }
  getNomPage():Observable<string>{
    return this.nomPage;
  }

  setConnexion(etat:boolean){
    this.etatConnexion = etat;
    this.estConnecte.next(this.etatConnexion);
  }
  
  statutConnexion():Observable<boolean>{
    return this.estConnecte;
  }

  getConnexion():boolean{
    return this.etatConnexion;
  }

}
