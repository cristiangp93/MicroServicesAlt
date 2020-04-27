import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S1Service {

  URL = '';

  constructor( public http: HttpClient ) { }

  get_amortizacion(solicitud: any, cloud: boolean) {
    if (cloud) {
      console.log('cloud');
      this.URL = `${environment.awsURL}/amortizacion`;
    } else {
      console.log('server');
      this.URL = `${environment.apiURL}/api/amortizacion`;
    }
    return this.http.get(this.URL, {params: {
        capital: solicitud.monto,
        plazo: solicitud.plazo,
        interes: solicitud.interes,
        amort: solicitud.amort
      }});
  }

  save_credito(data: any, cloud: boolean) {
    if (cloud) {
      console.log('cloud');
      this.URL = `${environment.awsURL}/credito`;
    } else {
      console.log('server');
      this.URL = `${environment.apiURL}/api/savecredito`;
    }
    return this.http.post(this.URL, data);
  }

  /*get_query_cloud(solicitud: any) {
    return this.http.get(`${environment.awsURL}/amortizacion`, {params: {
        capital: solicitud.monto,
        plazo: solicitud.plazo,
        interes: solicitud.interes,
        amort: solicitud.amort
      }});
  }

  get_query_servidor( solicitud: any) {
    return this.http.get(`${environment.apiURL}/api/amortizacion`, {params: {
        capital: solicitud.monto,
        plazo: solicitud.plazo,
        interes: solicitud.interes,
        amort: solicitud.amort
      }});
  }*/

  /*save_credito_cloud(data: any) {
    return this.http.post(`${environment.awsURL}/credito`, data);
  }

  save_credito_server(data: any) {
    return this.http.post(`${environment.apiURL}/api/savecredito`, data);
  }*/

}
