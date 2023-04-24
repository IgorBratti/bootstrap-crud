import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletimEscolarModule } from './boletim-escolar.module';
import { BoletimReadComponent } from './boletim-read/boletim-read.component';

const routes: Routes = [
  {path: '', component: BoletimReadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoletimEscolarRoutingModule { }
