import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeproduitsService } from '../listeproduits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {

  constructor(private produitService:ListeproduitsService,private router:Router) { }
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
  submit(f:NgForm){
    let test:boolean;
    test=this.produitService.update(this.id,this.titre,this.img,this.marquee,this.px,this.dispo,this.qnte,this.dte)}

    onListCh() 
    { this.router.navigate(['']); }
}
