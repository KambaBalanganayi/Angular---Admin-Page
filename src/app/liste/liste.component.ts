import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';
import { IListeBiere } from '../iliste-biere';
import { IProduit } from '../iproduit';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit{
  produits:Array<IBiere>;
  sontEditable:boolean = false;
  estConnecte:boolean = false;
  colonnesAffichees:string[] = ['id', 'nom', 'brasserie','admin'];

  constructor(private authServ:AuthService, private bieroServ:BieroService){
    this.produits = [];
    
  }

  ngOnInit(): void {
    this.authServ.statutConnexion().subscribe((etat:boolean)=>{
      this.estConnecte = etat;
      if(this.estConnecte === false){
        this.sontEditable = false;
      }
    })
    this.authServ.setNomPage("Liste");
    this.bieroServ.getBieres().subscribe((listeBiere)=>{
      this.produits = listeBiere.data;
    });

  }

  // verifConnexion(){
  //   //console.log(this.authServ.etatConnexion)
  //   if(!this.authServ.getConnexion() && this.sontEditable == true){
  //     this.sontEditable = false;
  //   }
  // }

  verifEditable(unProduit:IProduit):boolean{
    let res:boolean = false;
    if(this.sontEditable || unProduit.estEditable){
      res = true;
    }
    return res;
  }


  supprimer(id_biere:number):void{
    this.bieroServ.effacerBiere(id_biere).subscribe((retour)=>{
      console.log(retour);
      this.bieroServ.getBieres().subscribe((listeBiere)=>{
        this.produits = listeBiere.data;
      });
    })
  }

}
