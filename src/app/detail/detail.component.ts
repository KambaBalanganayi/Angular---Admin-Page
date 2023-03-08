import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BieroService } from '../biero.service';
import { IBiere } from '../ibiere';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
  @Input() biere:IBiere;
  @Input() peutEditer:boolean;
  @Output() peutEditerChange = new EventEmitter<boolean>();
  estConnecte:boolean = false;
  modifForm:FormGroup;

  constructor(private authServ:AuthService, 
              private route:ActivatedRoute, 
              private bieroServ:BieroService,
              private router:Router){ 
                this.authServ.statutConnexion().subscribe((etat)=>{
                  this.estConnecte = etat;
                  if(etat === false){
                    this.peutEditer = false;
        }
      })
    }
  
  ngOnInit(): void {
    this.authServ.setNomPage("Détail d'une bière");
    
    this.route.params.subscribe((params)=>{
      this.bieroServ.getUneBiere(params['id']).subscribe((biere:any)=>{

        this.biere = biere.data;
        this.modifForm = new FormGroup({
          nom: new FormControl(this.biere.nom),
          brasserie : new FormControl(this.biere.brasserie),
          description : new FormControl(this.biere.description)
        });
      })
    })

    
  }
 

  annuler(){

    this.modifForm.controls["nom"].setValue(this.biere.nom);
    this.modifForm.controls["brasserie"].setValue(this.biere.brasserie);
    this.modifForm.controls["description"].setValue(this.biere.description);
  }

  modifier(){
    let uneBiere:IBiere = this.modifForm.value;

    this.bieroServ.modifierBiere(this.biere.id_biere, uneBiere).subscribe((retour)=>{
      console.log(retour);
      this.biere.nom = uneBiere.nom;
      this.biere.brasserie = uneBiere.brasserie;
      this.biere.description = uneBiere.description;

      this.router.navigate(['produit'])
    });
    
  }


}
