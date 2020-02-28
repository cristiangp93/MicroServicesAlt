import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class S2Service {

  constructor(public http: HttpClient) { }

  get_creditos( cloud: boolean ) {
    let URL = '';
    if (cloud) {
      console.log('cloud');
      URL = `${environment.awsURL}/creditos`;
    } else {
      console.log('server');
      URL = `${environment.apiURL}/api/creditos`;
    }
    return this.http.get(URL);
  }

  pagar_cuota(payload: any, cloud: boolean) {
    let URL = '';
    if (cloud) {
      console.log('cloud');
      URL = `${environment.awsURL}/pagar`;
    } else {
      console.log('server');
      URL = `${environment.apiURL}/api/pagar`;
    }
    return this.http.put(URL, payload);
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
