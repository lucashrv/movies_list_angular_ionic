import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/api/moviesServices/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  searchQuery: string = '';
  dataMovies: any[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe((response) => {
      this.dataMovies = response.results || [];
    }, error => {
      console.error('Erro ao listar filmes:', error);
    })
  }

  searchMovies() {
    if (this.searchQuery.trim() === '') {
      this.moviesService.getAllMovies().subscribe((response) => {
        this.dataMovies = response.results || [];
      }, error => {
        console.error('Erro ao listar filmes:', error);
      })
    } else {
      this.moviesService.searchMovies(this.searchQuery).subscribe(
        (data: any) => {
          this.dataMovies = data.results;
        },
        (error) => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }

  }
}