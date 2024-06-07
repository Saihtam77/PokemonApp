import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AzureServiceService {

  url = "https://pokemonbackend.azurewebsites.net/api/PokemonGet?code=4CTObHqOVg_0OQudsDdUTN8gO3kz0VyZfpmraY0yqapVAzFu0cEUsg%3D%3D";

  constructor(private http: HttpClient) { }
  
  getData(): Observable<any> {
    return this.http.get(this.url);
  }

}


