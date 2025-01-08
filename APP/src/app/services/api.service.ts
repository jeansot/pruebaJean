import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3003/book';
  
  constructor(private _httpClient: HttpClient) {}

public getBooks(): Observable<Book[]> {
  return this._httpClient.get<Book[]>(this.apiUrl);

}
public getBook(referenceCode: string): Observable<Book> {
  return this._httpClient.get<Book>(`${this.apiUrl}/${referenceCode}`);
}

public createBook(book: Book): Observable<Book> {
  return this._httpClient.post<Book>(`${this.apiUrl}`, book);
}
public updateBook(referenceCode: string, book: Book): Observable<Book> {
  return this._httpClient.put<Book>(`${this.apiUrl}/${referenceCode}`, book);
}
public deleteBook(referenceCode: string): Observable<any> {
  return this._httpClient.delete(`${this.apiUrl}/${referenceCode}`);
}



}
