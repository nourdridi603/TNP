import { Component, OnInit } from '@angular/core';
import { ListeproduitsService } from '../listeproduits.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private produiService:ListeproduitsService) { }

  ngOnInit() {
  }

  onSubmit(p:number)
  { this.produiService.getChaussByPrix(p);}
}

