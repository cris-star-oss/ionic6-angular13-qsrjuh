import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cidOrigem: string;
  cidDestino: string;
  estOrigem: string;
  estDestino: string;
  kmPercorrido: number;
  peso: number;
  resultado: number;

  constructor() {}
  simulacaoEntrega() {
    let frete = 20;
    if (this.kmPercorrido < 400 && this.estOrigem == this.estDestino) {
      frete = this.kmPercorrido * 1.2;
    } else if (this.kmPercorrido >= 400 && this.estOrigem == this.estDestino) {
      frete = this.kmPercorrido * 1.35;
    } else {
      frete = this.kmPercorrido * 1.4;
    }
    if ((this.peso -= 3)) {
      frete = frete * 0.85;
    }
    this.resultado = frete;
  }

  ionViewDidEnter() {}
}
