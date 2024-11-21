import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/api/moviesServices/movies.service';
import { CurrencyConversionService } from 'src/app/services/currency/currency-conversion.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  movieId: string = '';
  dataMovie: any = {};

  constructor(private route: ActivatedRoute, private moviesService: MoviesService, private currencyConversionService: CurrencyConversionService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';

    this.moviesService.getOneMovie(this.movieId).subscribe((response) => {

      this.dataMovie = response || {};
      this.currencyConversionService.convertToBRL(this.dataMovie.budget).subscribe((result) => {
        this.dataMovie.budget = result;
      });
    }, error => {
      console.error('Erro ao listar filme:', error);
    })
  }

}
