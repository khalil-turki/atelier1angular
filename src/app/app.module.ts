import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUserComponent } from './list-user/list-user.component';
import { Test1Component } from './test1/test1.component';
import { FournisseurComponent } from './atelier1/fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './atelier1/list-fournisseur/list-fournisseur.component';
import { ListProduitsComponent } from './atelier2/list-produits/list-produits.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { AddProduitComponent } from './atelier2/add-produit/add-produit.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    Test1Component,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    AddProduitComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
