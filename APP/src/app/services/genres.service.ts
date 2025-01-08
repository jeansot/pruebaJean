import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LiteraryGenres } from '../models/literaryGenre.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private apiUrl = 'http://localhost:3003/literaryGenres';
  constructor(private _httpClient: HttpClient) { }

  public getGenre(): Observable<LiteraryGenres[]> {
    return this._httpClient.get<LiteraryGenres[]>(this.apiUrl);
  
  }
  

}
