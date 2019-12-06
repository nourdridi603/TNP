import { Component, OnInit, } from '@angular/core';
import {Produits} from './../Produits';
import {ListeproduitsService} from './../listeproduits.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
 ident:number;
 ch:Produits;
 disp:Boolean;
 
  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private service:ListeproduitsService) { }

  ngOnInit() {
    this.ident = this.activatedRoute.snapshot.params['id'];
    this.ch=this.service.getChaussById (this.ident);
    this.disp=this.ch.disponibility;

  }
 

  onListCh() 
    { this.router.navigate(['']); }
}
