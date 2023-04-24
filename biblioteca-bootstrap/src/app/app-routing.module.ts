import { BoletimEscolarModule } from './boletim-escolar/boletim-escolar.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaUpdateComponent } from './pessoa/pessoa-update/pessoa-update.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule)
  },
  {
    path: 'boletim-escolar',
    loadChildren: () => import('./boletim-escolar/boletim-escolar.module').then(m => m.BoletimEscolarModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
