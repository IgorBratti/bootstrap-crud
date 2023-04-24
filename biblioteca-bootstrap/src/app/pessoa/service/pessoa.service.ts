import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, tap } from 'rxjs';
import { Pessoa } from '../model/pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly baseUrl = 'http://localhost:3000/pessoas'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Pessoa[]>(this.baseUrl).pipe(tap(console.log));
  }

  create(pessoa: Pessoa) {
    return this.http.post(this.baseUrl, pessoa).pipe(take(1))
  }

  loadById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  readById(id: number) {
    return this.http.get<Pessoa>(`${this.baseUrl}/${id}`)
  }

  update(pessoa: any) {
    const url = `${this.baseUrl}/${pessoa.id}`
    return this.http.put<Pessoa>(url, pessoa).pipe(take(1))
  }
}
