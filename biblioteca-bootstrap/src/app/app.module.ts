import { PessoaModule } from './pessoa/pessoa.module';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinimoValidatorDirective } from './shared/directives/minimo-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    MinimoValidatorDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PessoaModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
