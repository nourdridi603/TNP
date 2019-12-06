import { Injectable } from '@angular/core';
import {Produits} from './Produits';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ListeproduitsService {
  chaussures=[new Produits(154,"Chaussures kid adidas","../assets/chaussures-kid-adidas-hoops-20-mid_4_v2.jpeg","adidas",140000,true,20, new Date("2019-01-16")),
              new Produits(289,"Grand-court","../assets/grand-court-k-noir--blanc_1_v1.jpg","adidas",150000,true,30,new Date("2019-11-15")),
              new Produits(369,"Nike air zoom pegasus","../assets/nike-air-zoom-pegasus-36_1_v1.jpg","nike",200000,false,0,new Date("2019-10-12")),
              new Produits(912,"Nano 9.0 Noir","../assets/Nano_9.0_Noir_EG4635_01_standard.jpg","asics",230000,true,50,new Date("2019-08-22")),
              new Produits(658,"Nano 9.0 Blanc","../assets/Nano_9.0_Blanc_EG1474_01_standard.jpg","asics",200000,false,0,new Date("2019-10-02")),
              new Produits(123,"maisieleblanc puma 2019","../assets/602-maisieleblanc-puma-en-2019-chaussure-chaussure-puma-et-5733.jpg","puma",110000,true,10,new Date("2019-09-14")),
              new Produits(789,"footkorner chaussures puma","../assets/footkorner-chaussures-puma-rs-x-bold-noir-toucan-372715-01.jpg","puma",100000,true,5,new Date("2019-10-28"))];



  constructor() { }
//ajout d'un produit
  addChaussure(c:Produits)
  {
      this.chaussures.push(c);
  }

  //update
  update(id:number,titre:string,img:string,marque:string,prix:number,dispo:boolean,qtte:number,date:Date):boolean{
    let test:boolean;
    let i=0;
    let item:Produits;
    while(this.chaussures[i].id!=id)
    {i++;}
          if(this.chaussures[i].id==id)
      {
       item=this.chaussures[i];
       if(titre!="")
       item.titre=titre;
       if(img!="")
       item.picture=img; 
       if(marque!="")
       item.marque=marque;
       if(prix!=0)
        item.prix=prix;
        if(qtte!=0)
        item.qte=qtte;
        this.chaussures[i]=item;
        test=true;
      }
      
      else test=false;
    return test;
  }

//delete
delete(id:number):boolean{
  let test:boolean;
  let i:number=0;
  while(this.chaussures[i].id!=id)
    {i++;}
          if(this.chaussures[i].id==id)
      {
        this.chaussures.splice(i,1);
        test=true;
      }
      else
      test=false;
  return test;
}

//recherche chaussure selon id 
  getChaussById (id:number)
    {
      i:Produits;
      for(let i of this.chaussures){
         if(i.id==id)
         {
             return i;
         }
    }
     return null;
  }

 
  //recherche chaussure selon prix


  getChaussByPrix(p:number)
  {
    i:Produits;
    for(let i of this.chaussures){
       if(i.prix<=p)
       {
         alert(" Le prix de " +i.titre +" qui est égal à "+i.prix  +" est convenable à votre budget");  
       }
  }
   return null;

  }}
