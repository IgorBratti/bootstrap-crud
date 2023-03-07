import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl = 'http://localhost:3000/pessoas'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Pessoa[]>(this.baseUrl).pipe(tap(console.log));
  }

}
