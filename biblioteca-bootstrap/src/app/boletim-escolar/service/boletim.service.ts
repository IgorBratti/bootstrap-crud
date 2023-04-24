import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletimService {

  constructor() { }

  somarNotas(nota1: number, nota2: number, nota3: number, nota4: number): number {
    let resultado: number;

    resultado = nota1 + nota2 + nota3 + nota4;

    if (resultado>10) {
      document.write("parabéns!")
    }
    return resultado;
  }


}

