import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/api/seriesServices/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  searchQuery: string = '';
  dataSeries: any[] = [];

  constructor(private seriesService: SeriesService) { }

  ngOnInit() {
    this.seriesService.getSeries().subscribe((response) => {
      this.dataSeries = response.results || [];
    }, error => {
      console.error('Erro ao listar séries:', error);
    })
  }

  searchSeries() {
    if (this.searchQuery.trim() === '') {
      this.seriesService.getSeries().subscribe((response) => {
        this.dataSeries = response.results || [];
      }, error => {
        console.error('Erro ao listar séries:', error);
      })
    } else {
      this.seriesService.searchSeries(this.searchQuery).subscribe(
        (data: any) => {
          this.dataSeries = data.results;
        },
        (error) => {
          console.error('Erro ao buscar filmes:', error);
        }
      );
    }
  }
}