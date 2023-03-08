import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {
  @Input() biere:IBiere;
  estConnecte:boolean = false;
  ajouterForm:FormGroup;
  

  constructor(private authServ:AuthService, 
              private route:ActivatedRoute, 
              private bieroServ:BieroService,
              private router:Router){ 

      this.authServ.statutConnexion().subscribe((etat)=>{
        this.estConnecte = etat;

      })
    }



  ngOnInit(): void {
    this.authServ.setNomPage("Ajouter une bière");

    this.route.params.subscribe((params)=>{
      this.bieroServ.getUneBiere(params['id']).subscribe((biere:any)=>{

        this.biere = biere.data;
        this.ajouterForm = new FormGroup({
          nom: new FormControl(),
          brasserie : new FormControl(),
          description : new FormControl()
        });
      })
    })
  
  }

  ajouter(){
    let uneBiere:IBiere = this.ajouterForm.value;
    this.bieroServ.ajouterBiere(uneBiere).subscribe((retour)=>{
      console.log(retour);
      
      this.biere.nom = uneBiere.nom, [Validators.required, Validators.minLength(2)];
      this.biere.brasserie = uneBiere.brasserie, [Validators.required, Validators.minLength(3)];
      this.biere.description = uneBiere.description, [Validators.required, Validators.minLength(5)];

      this.router.navigate(['produit'])

      console.log(uneBiere);
      
    });
  }



}
