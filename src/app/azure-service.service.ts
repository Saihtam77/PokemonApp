import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AzureServiceService {
  
  url="https://cleandatabase.azurewebsites.net";
  
  constructor(private http:HttpClient) { }
}
