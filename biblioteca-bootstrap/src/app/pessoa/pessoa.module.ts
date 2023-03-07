import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaReadComponent } from './pessoa-read/pessoa-read.component';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './pessoa-delete/pessoa-delete.component';


@NgModule({
  declarations: [
    PessoaCreateComponent,
    PessoaReadComponent,
    PessoaUpdateComponent,
    PessoaDeleteComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
