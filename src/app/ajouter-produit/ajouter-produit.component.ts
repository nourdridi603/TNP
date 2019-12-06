import { Component, OnInit } from '@angular/core';
import { Produits } from '../Produits';
import { ListeproduitsService } from '../listeproduits.service';
import { NgForm } from '@angular/forms';
import { ngModuleJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {

  constructor( private produitService:ListeproduitsService) { }
  id:number=0;
  titre:string="";
  img:string="";
marquee:string="";
px:number=0;
dispo:boolean;
qnte:number=0;
dte:Date=new Date();
  ngOnInit() {
  }
  onSubmit(f:NgForm)
  { this.produitService.addChaussure(new Produits(f.value['id'],f.value['titre'],f.value['image'],f.value['marque'],f.value['prix'],f.value['disp'],f.value['qte'],f.value['dateF']));
}
submit(f:NgForm){
let test:boolean;
test=this.produitService.update(this.id,this.titre,this.img,this.marquee,this.px,this.dispo,this.qnte,this.dte)
}
sub(f:NgForm){
let test:boolean;
test=this.produitService.delete(this.id);
}
}