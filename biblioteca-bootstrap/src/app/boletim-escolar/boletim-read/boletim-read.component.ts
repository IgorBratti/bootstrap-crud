import { BoletimService } from './../service/boletim.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boletim-read',
  templateUrl: './boletim-read.component.html',
  styleUrls: ['./boletim-read.component.scss']
})
export class BoletimReadComponent implements OnInit {
  private res : number = 0;

  constructor(private BoletimService: BoletimService) { }

  ngOnInit(): void {}

  somar(nota1: string, nota2: string, nota3: string, nota4: string): void {
    let n1: number;
    let n2: number;
    let n3: number;
    let n4: number;

    n1 = parseFloat(nota1);
    n2 = parseFloat(nota2);
    n3 = parseFloat(nota3);
    n4 = parseFloat(nota4);

    this.res = this.BoletimService.somarNotas(n1, n2, n3, n4)

  }

  get resultado(): string {
    return this.res.toString();
  }



}
