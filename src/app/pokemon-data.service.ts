import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../dataType/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  dataUrl=""
  constructor(private http: HttpClient) {}

  GetAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.dataUrl);
  }

  GetPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.dataUrl}/${id}`);
  }
}
