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
import { DetailProduitComponent } from './atelier2/detail-produit/detail-produit.component';
import { DeleteProduitComponent } from './atelier2/delete-produit/delete-produit.component';
import { UpdateProduitComponent } from './atelier2/update-produit/update-produit.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './atelier2/login/login.component';
import { MainInvoiceComponentComponent } from './atelier3/main-invoice-component/main-invoice-component.component';
import { InvoiceListComponentComponent } from './atelier3/invoice-list-component/invoice-list-component.component';
import { InvoiceComponentComponent } from './atelier3/invoice-component/invoice-component.component';
import { HeaderComponent } from './atelier3/header/header.component';
import { MainUserComponent } from './atelier7/main-user/main-user.component';
import { FormUserComponentComponent } from './atelier7/form-user-component/form-user-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    Test1Component,
    FournisseurComponent,
    ListFournisseurComponent,
    ListProduitsComponent,
    AddProduitComponent,
    DetailProduitComponent,
    DeleteProduitComponent,
    UpdateProduitComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    MainInvoiceComponentComponent,
    InvoiceListComponentComponent,
    InvoiceComponentComponent,
    HeaderComponent,
    MainUserComponent,
    FormUserComponentComponent

    
    
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
