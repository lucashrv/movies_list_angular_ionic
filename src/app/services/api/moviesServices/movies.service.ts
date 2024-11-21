import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = 'https://api.themoviedb.org/3';

  private apiKey = '0ec8c210edcad6fa05aabf9bf0927d5b'

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}&language=pt-BR&page=1`)
  }

  getOneMovie(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=pt-BR`)
  }

  searchMovies(query: string) {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${query}`;
    return this.http.get(url);
  }
}
