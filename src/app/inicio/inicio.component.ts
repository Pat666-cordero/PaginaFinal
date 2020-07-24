import { Component, OnInit } from '@angular/core';

import { TestService } from'../Services/test.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  list:any;

  constructor( private testservice: TestService) {

    this.testservice.index().subscribe((res)=>{

      this.list = res["objects"];
      
    }, (err)=>{

    });
   }
  ngOnInit(): void {
  }

}
