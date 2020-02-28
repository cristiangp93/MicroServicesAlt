import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InicioComponent} from './pages/inicio/inicio.component';
import {Servicio1Component} from './pages/servicio1/servicio1.component';
import {Servicio2Component} from './pages/servicio2/servicio2.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'servicio1', component: Servicio1Component},
  { path: 'servicio2', component: Servicio2Component},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
