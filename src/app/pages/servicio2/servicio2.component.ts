import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {S2Service} from '../../services/s2.service';

@Component({
  selector: 'app-servicio2',
  templateUrl: './servicio2.component.html',
  styleUrls: ['./servicio2.component.css']
})
export class Servicio2Component implements OnInit {

  loading: boolean;
  datos: any = [];
  selectedCredit: any = [];
  cuotas: any = [];
  cloudDeploy: boolean;

  constructor(public s2: S2Service) { }

  ngOnInit(): void {
  }

  get_prestamos() {
    this.loading = true;
    this.s2.get_creditos( this.cloudDeploy )
      .subscribe((resp: any) => {
        this.loading = false;
        if ( resp.statusCode !== 400) {
          this.datos = resp.body;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.body
          });
        }
      });
  }

  pagar_cuota(cuotaIdx: number ) {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.s2.pagar_cuota({amort: this.selectedCredit, cuotaIdx}, this.cloudDeploy)
      .subscribe((resp: any) => {
        Swal.close();
        if ( resp.statusCode !== 400) {
          Swal.fire({
            icon: 'success',
            title: 'Ok !',
            text: resp.body
          }).then(() => {
            this.selectedCredit = [];
            this.cuotas = [];
            this.get_prestamos();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.body
          });
        }
      });
  }

}
