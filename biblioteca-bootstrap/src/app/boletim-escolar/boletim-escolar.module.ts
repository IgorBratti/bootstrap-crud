import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletimEscolarRoutingModule } from './boletim-escolar-routing.module';
import { BoletimReadComponent } from './boletim-read/boletim-read.component';


@NgModule({
  declarations: [
    BoletimReadComponent
  ],
  imports: [
    CommonModule,
    BoletimEscolarRoutingModule
  ]
})
export class BoletimEscolarModule { }
