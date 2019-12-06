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
 tabImage=[ "../assets/5d54f02a5fb2246c3058171b3dd19f1b_preview_featured.jpg",
 "1200px-Swoosh.svg",
 "images-32",
 "téléchargement"
 ];
  constructor(private router:Router,private activatedRoute:ActivatedRoute ,private service:ListeproduitsService) { }

  ngOnInit() {
    this.ident = this.activatedRoute.snapshot.params['id'];
    this.ch=this.service.getChaussById (this.ident);
    this.disp=this.ch.disponibility;

  }
 

  onListCh() 
    { this.router.navigate(['']); }
}
