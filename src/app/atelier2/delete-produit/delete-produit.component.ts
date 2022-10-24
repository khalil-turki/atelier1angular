import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-produit',
  templateUrl: './delete-produit.component.html',
  styleUrls: ['./delete-produit.component.css']
})
export class DeleteProduitComponent implements OnInit {

  
    id:any;
      constructor(private ac : ActivatedRoute) { }
    
      ngOnInit(): void {
        this.id=this.ac.snapshot.params['myid'];
        console.log(this.id);
        this.ac.params.subscribe((d)=>{console.log(d)}
        
        
        
        );
      }
    
}
