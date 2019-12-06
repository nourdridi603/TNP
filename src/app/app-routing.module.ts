import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './menu/accueil/accueil.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { ModifComponent } from './modif/modif.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [
  {path:"",component:AccueilComponent},
  {path:"ajouterproduit",component:AjouterProduitComponent},
  {path:"login",component:LoginComponent},
  {path:"contactus",component:ContactusComponent},
  {path:'accueil/:id', component:ProduitComponent},
  {path:"modif",component:ModifComponent},
  {path:"delete",component:DeleteComponent},
  {path:"**",component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
