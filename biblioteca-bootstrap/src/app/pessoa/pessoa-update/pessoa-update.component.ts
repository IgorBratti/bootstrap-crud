import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../model/pessoa-model';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.scss'],
})
export class PessoaUpdateComponent implements OnInit {
  pessoa!: Pessoa;
  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.pessoaService.readById(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
    });
  }

  updateProduct(): void {
    this.pessoaService.update(this.pessoa).subscribe(() => {
      this.router.navigate(["/pessoa"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/pessoa"]);
  }
}
