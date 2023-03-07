import { PessoaUpdateComponent } from './pessoa-update/pessoa-update.component';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaReadComponent } from './pessoa-read/pessoa-read.component';

const routes: Routes = [
  { path: '', component: PessoaReadComponent },
  { path: 'novo', component: PessoaCreateComponent },
  { path: 'editar/id', component: PessoaUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
