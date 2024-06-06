import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../dataType/Pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  dataUrl="http://localhost:3000/Team"
  constructor(private http: HttpClient) {}

  GetAllTeam(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.dataUrl);
  }

  GetTeamById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.dataUrl}/${id}`);
  }

  CreateTeam(membres: Pokemon[]): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.dataUrl, membres);
  }
}
