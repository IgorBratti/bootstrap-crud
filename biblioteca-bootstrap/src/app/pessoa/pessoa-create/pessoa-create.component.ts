import { Router } from '@angular/router';
import { PessoaService } from './../service/pessoa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.scss']
})
export class PessoaCreateComponent implements OnInit {

  pessoa!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pessoaService: PessoaService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.pessoa = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      idade: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(3)]],
      dataDeNascimento: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      cpf: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],

    })
  }

  // onSubmit() {
  //  console.log(this.pessoa.value);
  //  if (this.pessoa.valid) {
  //    console.log('submit');
  //    this.pessoaService.create(this.pessoa.value).subscribe();
  //   this.router.navigate(["pessoa"])
  // }
  //}


  criarUsuario(): void {
    this.pessoaService.create(this.pessoa.value).subscribe(() => {
      this.router.navigate(['pessoa'])
    })
  }

}
