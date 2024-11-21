import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/api/moviesServices/movies.service';

@Component({
  selector: 'app-movies-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  movieId: string = '';
  dataMovie: any = {};

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') || '';

    this.moviesService.getOneMovie(this.movieId).subscribe((response) => {
      console.log(response);

      this.dataMovie = response || {};
    }, error => {
      console.error('Erro ao listar filme:', error);
    })
  }

}
