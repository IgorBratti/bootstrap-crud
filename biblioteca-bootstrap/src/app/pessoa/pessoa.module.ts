import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaReadComponent } from './pessoa-read/pessoa-read.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';

import { NumericoDirective } from '../shared/directives/numerico.directive';

import { NgxMaskModule,IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    PessoaCreateComponent,
    PessoaReadComponent,
    PessoaUpdateComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()

  ]
})
export class PessoaModule { }
