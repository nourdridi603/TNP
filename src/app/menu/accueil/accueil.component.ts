import { Component, OnInit } from '@angular/core';
import { ListeproduitsService } from '../../listeproduits.service';
import { Produits } from 'src/app/Produits';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  tabproduit:Produits[];
  constructor(private service:ListeproduitsService) { }
  
  ngOnInit() {
    this.tabproduit=this.service.chaussures;
  }
 
}
