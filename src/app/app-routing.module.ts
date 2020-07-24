import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { FixtureComponent} from './fixture/fixture.component';
import { ActualizarImgComponent } from './actualizar-img/actualizar-img.component';


const routes: Routes = [
  /*{ path:"", component: HomeComponent},
    {path:"fixture", component: FixtureComponent},*/
    { path: "", component:InicioComponent},
    { path: "inicio", component: InicioComponent},
    { path: "login", component: LoginComponent},
    { path: "fixture", component: FixtureComponent},
    { path: "editar", component: ActualizarImgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
