import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelebritiesService {

  private apiUrl = 'https://api.themoviedb.org/3';

  private apiKey = '0ec8c210edcad6fa05aabf9bf0927d5b'

  constructor(private http: HttpClient) { }

  getCelebrities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/person/popular?api_key=${this.apiKey}`)
  }

  getOneCelebrity(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/person/${id}?api_key=${this.apiKey}&language=pt-BR`)
  }

  searchCelebrities(query: string) {
    const url = `${this.apiUrl}/search/person?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(url);
  }
}
