import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListeproduitsService } from '../listeproduits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private produitService:ListeproduitsService,private router:Router) { }
  id:number=0;
  ngOnInit() {
  }
  sub(f:NgForm){
    let test:boolean;
    test=this.produitService.delete(this.id);
    }
    onListCh() 
    { this.router.navigate(['']); }
}
