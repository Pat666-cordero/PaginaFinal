import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//para el fixture v.2
import { FixtureService} from'../Services/fixture.service'

@Component({
  selector: 'app-actualizar-img',
  templateUrl: './actualizar-img.component.html',
  styleUrls: ['./actualizar-img.component.css']
})
export class ActualizarImgComponent implements OnInit {

list: any=[];

  constructor( private http: HttpClient, private fixtureService: FixtureService) { 
//para el fixtue v.2
    this.fixtureService.index().subscribe((res) =>{
      this.list = res['objects'];
      
      
      }, (err)=>{

      });
  }

  ngOnInit(): void {
  }

   
  //funcion de la imagen
  selectedFile: File = null;

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(){
    const fd =new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    this.http.post('gs://olimpiadasconti.appspot.com', fd).subscribe( res=> {
      console.log(res);
    });
  }

}
