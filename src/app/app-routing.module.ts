import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './atelier2/add-produit/add-produit.component';
import { DeleteProduitComponent } from './atelier2/delete-produit/delete-produit.component';
import { DetailProduitComponent } from './atelier2/detail-produit/detail-produit.component';
import { ListProduitsComponent } from './atelier2/list-produits/list-produits.component';
import { LoginComponent } from './atelier2/login/login.component';
import { UpdateProduitComponent } from './atelier2/update-produit/update-produit.component';
import { HeaderComponent } from './atelier3/header/header.component';
import { InvoiceComponentComponent } from './atelier3/invoice-component/invoice-component.component';
import { FormUserComponentComponent } from './atelier7/form-user-component/form-user-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'list-produit' ,
    component:ListProduitsComponent,
    //children[]
  } ,
  
  {
    path: 'login' ,
    component:LoginComponent
  } ,
   
  {
    path: 'form' ,
    component:FormUserComponentComponent
  } ,

  
  {
    path: 'add-produit' ,
    component:AddProduitComponent
  } ,
  
  {
    path: 'detail-produit' ,
    component:DetailProduitComponent
  } ,
  {
    path: 'update-produit' ,
    component:UpdateProduitComponent
  } ,
  {
    path: 'delete-produit/:id' ,
    component:DeleteProduitComponent
  } ,
  {
    path: 'header' ,
    component:HeaderComponent
  } ,

 
  {
    path: '**' ,
    component:NotFoundComponent
  } 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
