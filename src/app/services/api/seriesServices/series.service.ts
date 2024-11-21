import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl = 'https://api.themoviedb.org/3';

  private apiKey = '0ec8c210edcad6fa05aabf9bf0927d5b'

  constructor(private http: HttpClient) { }

  getSeries(): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}&language=pt-BR&page=1`)
  }

  getOneSerie(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/tv/${id}?api_key=${this.apiKey}&language=pt-BR`)
  }

  searchSeries(query: string) {
    const url = `${this.apiUrl}/search/tv?api_key=${this.apiKey}&language=pt-BR&query=${query}`;
    return this.http.get(url);
  }
}
