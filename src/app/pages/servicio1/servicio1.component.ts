import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Solicitud} from '../../interfaces/solicitud';
import Swal from 'sweetalert2';
import {S1Service} from '../../services/s1.service';
import { faPrint, faSearch, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicio1',
  templateUrl: './servicio1.component.html',
  styleUrls: ['./servicio1.component.css']
})
export class Servicio1Component implements OnInit {

  faPrint = faPrint;
  faSearch = faSearch;
  faSave = faSave;
  // tslint:disable-next-line:variable-name
  tabla_amort: any = [];
  solicitud: Solicitud = new Solicitud();
  totalPagar: number;
  totalInteres: number;
  cloudDeploy = true;

  constructor(public s1: S1Service) { }

  ngOnInit(): void {
  }

  calc_cred( form: NgForm ) {
    this.totalPagar = 0;
    this.totalInteres = 0;
    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.s1.get_amortizacion( this.solicitud, this.cloudDeploy )
      .subscribe((resp: any) => {
        Swal.close();
        if ( resp.statusCode !== 400) {
          this.tabla_amort = resp.body;
          this.tabla_amort.forEach( it => {
            this.totalInteres += it.cuota_interes;
            this.totalPagar += it.pago_final;
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.body
          });
        }
      }, error => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: error.name,
          text: error.message
        });
      });
  }

  save() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere por favor'
    });
    Swal.showLoading();
    this.s1.save_credito( this.tabla_amort, this.cloudDeploy)
      .subscribe((resp: any) => {
        Swal.close();
        if ( resp.statusCode !== 400) {
          Swal.fire({
            icon: 'success',
            title: 'Ok !',
            text: resp.body
          });
          this.tabla_amort = [];
          this.solicitud = new Solicitud();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: resp.body
          });
        }
      }, error => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: error.name,
          text: error.message
        });
      });
  }

  print() {
    // tslint:disable-next-line:one-variable-per-declaration
    let printContents, popupWin;
    printContents = document.getElementById('print-div').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <!doctype html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title></title>
        <style>
        </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
      <body onload="window.print();">
        <br>
        ${printContents}
      </body>
      </html>`);
    popupWin.document.close();
  }

}
