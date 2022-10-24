import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit {

  


  constructor(private router:  Router) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    
      this.router.navigate(['form']);
    
    
  }

}

