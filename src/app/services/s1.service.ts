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

}
