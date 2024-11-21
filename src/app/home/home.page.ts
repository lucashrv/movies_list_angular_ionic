import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/api/moviesServices/movies.service';
import { SeriesService } from '../services/api/seriesServices/series.service';
import { CelebritiesService } from '../services/api/celebritiesServices/celebrities.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  movie: any[] = [];
  serie: any[] = [];
  celebrity: any[] = [];

  constructor(
    private moviesService: MoviesService,
    private seriesService: SeriesService,
    private celebritiesService: CelebritiesService
  ) { }

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe((response) => {
      this.movie = response.results || [];
    }, error => {
      console.error('Erro ao listar filmes:', error);
    })

    this.seriesService.getSeries().subscribe((response) => {
      this.serie = response.results || [];
    }, error => {
      console.error('Erro ao listar séries:', error);
    })

    this.celebritiesService.getCelebrities().subscribe((response) => {
      console.log(response);
      this.celebrity = response.results || [];
    }, error => {
      console.error('Error ao listar celebridades:', error);
    })
  }

}
