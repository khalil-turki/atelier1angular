import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  constructor(private router:  Router) { }

  ngOnInit(): void {
  }

  list(): void {
    
      this.router.navigate(['list-produit']);
    
    
  }

}
