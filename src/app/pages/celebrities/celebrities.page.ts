import { Component, OnInit } from '@angular/core';
import { CelebritiesService } from '../../services/api/celebritiesServices/celebrities.service';

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.page.html',
  styleUrls: ['./celebrities.page.scss'],
})
export class CelebritiesPage implements OnInit {

  searchQuery: string = '';
  dataCelebrities: any[] = [];

  constructor(private celebritiesService: CelebritiesService) { }

  ngOnInit() {
    this.celebritiesService.getCelebrities().subscribe((response) => {
      this.dataCelebrities = response.results || [];
    }, error => {
      console.error('Error ao listar celebridades:', error);
    })
  }

  searchCelebrities() {
    if (this.searchQuery.trim() === '') {
      this.celebritiesService.getCelebrities().subscribe((response) => {
        this.dataCelebrities = response.results || [];
      }, error => {
        console.error('Erro ao listar celebridades:', error);
      })
    } else {
      this.celebritiesService.searchCelebrities(this.searchQuery).subscribe(
        (data: any) => {
          console.log(data);

          this.dataCelebrities = data.results;
        },
        (error) => {
          console.error('Erro ao buscar celebridades:', error);
        }
      );
    }

  }

}
