import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './atelier2/add-produit/add-produit.component';
import { ListProduitsComponent } from './atelier2/list-produits/list-produits.component';

const routes: Routes = [
  {
    path: 'add-produit' ,
    component:AddProduitComponent
  } ,
  {
    path: 'list-produit' ,
    component:ListProduitsComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
