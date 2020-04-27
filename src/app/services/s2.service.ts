import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S2Service {

  URL = '';

  constructor(public http: HttpClient) { }

  get_creditos( cloud: boolean ) {
    if (cloud) {
      console.log('cloud');
      this.URL = `${environment.awsURL}/creditos`;
    } else {
      console.log('server');
      this.URL = `${environment.apiURL}/api/creditos`;
    }
    return this.http.get(this.URL);
  }

  pagar_cuota(payload: any, cloud: boolean) {
    if (cloud) {
      console.log('cloud');
      this.URL = `${environment.awsURL}/pagar`;
    } else {
      console.log('server');
      this.URL = `${environment.apiURL}/api/pagar`;
    }
    return this.http.put(this.URL, payload);
  }

  /*get_creditos_cloud() {
    return this.http.get(`${environment.awsURL}/creditos`);
  }

  get_creditos_server() {
    return this.http.get(`${environment.apiURL}/api/creditos`);
  }*/

  /*pagar_cuota_cloud(payload: any) {
    return this.http.put(`${environment.awsURL}/pagar`, payload);
  }

  pagar_cuota_server( payload: any) {
    return this.http.put(`${environment.apiURL}/api/pagar`, payload);
  }*/
}
