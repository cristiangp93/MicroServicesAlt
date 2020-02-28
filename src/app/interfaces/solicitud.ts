export class Solicitud {
  monto: number;
  plazo: number;
  interes: number;
  amort: string;

  constructor() {
    this.monto = 0;
    this.plazo = 12;
    this.interes = 15;
    this.amort = 'GER';
  }
}
