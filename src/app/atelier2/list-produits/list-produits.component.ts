import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/model/Produit';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  searchText:any;
  msg :any;
  index : number =-1;
  constructor(private router:  Router) { }


  listProduits : Produit[]=[
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.32},
    {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.25},
    ]
  ngOnInit(): void {
  }

  showDetail(i:any){
     this.index = i;
     this.msg = this.listProduits[i];
  }

  TVA(i:any){
    this.index = i;
    this.listProduits[i].tauxTVA=0.2;
    this.listProduits[i].libelle=' Produit1';
    this.listProduits[i].libelle= this.listProduits[i].libelle+"TVA MODIFIER";
  
 }
 getColor(v:any){
  if (v<=50){
    return 'bold' ;
  }
  return 'italic' ;
}


add(): void {
    
  this.router.navigate(['add-produit']);


}


}
