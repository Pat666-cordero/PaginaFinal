import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { DiciplinasService } from'../Services/diciplinas.service';
import { FixtureService } from'../Services/fixture.service';


@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
list: any=[];
disc: any=[];
formSearch;
  constructor( private disciplinas: DiciplinasService,
    private fixtureService: FixtureService,
    private formBuilder : FormBuilder) {
      this.formSearch = this.formBuilder.group({
        'disciplina': ''
      });

      this.fixtureService.index().subscribe((res) =>{
        this.list = res['objects'];
        
        
        }, (err)=>{
  
        });

    this.disciplinas.index().subscribe((res)=>{

      this.disc = res["objects"];
      
    }, (err)=>{

    });

   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.fixtureService.indexByDisciplina(this.formSearch.value.disciplina.id)
    .subscribe((res) =>{
      this.list = res['objects'];
      
      
      }, (err)=>{

      });
  }
}
