import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Components
import { AppComponent } from './app.component';
import { Servicio1Component } from './pages/servicio1/servicio1.component';
import { Servicio2Component } from './pages/servicio2/servicio2.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Servicio1Component,
    Servicio2Component,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
