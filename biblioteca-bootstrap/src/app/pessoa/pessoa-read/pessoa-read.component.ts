import { Pessoa } from './../model/pessoa-model';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.scss']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] | undefined;

  pessoas$: Observable<Pessoa[]> | undefined

  constructor(
    private pessoaService: PessoaService
  ) { }

  ngOnInit(): void {
    // this.pessoaService.list().subscribe(dados => this.pessoas = dados)

    this.pessoas$ =this.pessoaService.list();
  }

}
