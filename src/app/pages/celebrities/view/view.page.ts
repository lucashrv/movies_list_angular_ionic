import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelebritiesService } from 'src/app/services/api/celebritiesServices/celebrities.service';

@Component({
  selector: 'app-celebrities-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  celebrityId: string = '';
  dataCelebrity: any = {};

  constructor(private route: ActivatedRoute, private celebritiesService: CelebritiesService) { }

  ngOnInit() {
    this.celebrityId = this.route.snapshot.paramMap.get('id') || '';

    this.celebritiesService.getOneCelebrity(this.celebrityId).subscribe((response) => {
      console.log(response);

      this.dataCelebrity = response || {};
    }, error => {
      console.error('Erro ao listar filme:', error);
    })
  }

}
