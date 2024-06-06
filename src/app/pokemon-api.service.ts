import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../dataType/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  apiurl="https://pokebuildapi.fr/api/v1/pokemon/generation/1"
  constructor(private http: HttpClient) {}

  GetAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.apiurl);
  }

  GetPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiurl}/${id}`);
  }

}
