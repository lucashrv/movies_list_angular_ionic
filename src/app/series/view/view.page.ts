import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/api/seriesServices/series.service';

@Component({
  selector: 'app-series-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  serieId: string = '';
  dataSerie: any = {};

  constructor(private route: ActivatedRoute, private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.serieId = this.route.snapshot.paramMap.get('id') || '';

    this.seriesService.getOneSerie(this.serieId).subscribe((response) => {
      console.log(response);

      this.dataSerie = response || {};
    }, error => {
      console.error('Erro ao listar série:', error);
    })
  }

}
