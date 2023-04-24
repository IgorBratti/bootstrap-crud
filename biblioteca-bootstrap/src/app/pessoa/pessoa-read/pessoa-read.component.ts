import { Pessoa } from './../model/pessoa-model';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../service/pessoa.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.scss']
})
export class PessoaReadComponent implements OnInit {

  pessoas!: Pessoa;

  pessoas$: Observable<Pessoa[]> | undefined

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.pessoaService.list().subscribe(dados => this.pessoas = dados)

    this.pessoas$ =this.pessoaService.list();
  }


  deletePessoa(id: number): void {
    this.pessoaService.delete(id).subscribe(() => {
      window.location.reload()
    })
  };

  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

}
