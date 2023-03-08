export interface IProduit {
    id:number;
    nom:string;
    prix:number;
    fabricant:string;   
    rabais?:boolean;    // Rabais est optionnel
    estEditable?:boolean;
}
