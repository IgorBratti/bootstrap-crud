import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.scss']
})
export class PessoaCreateComponent implements OnInit {

  pessoa!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pessoa = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],

    })
  }

}
