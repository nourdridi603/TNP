import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './menu/accueil/accueil.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Error404Component } from './error404/error404.component';
import { ProduitComponent } from './produit/produit.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { PipePPipe } from './pipe-p.pipe';
import { ModifComponent } from './modif/modif.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjouterProduitComponent,
    ContactusComponent,
    Error404Component,
    ProduitComponent,
    LoginComponent,
    Page1Component,
    PipePPipe,
    ModifComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
