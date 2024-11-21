import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoviesPageRoutingModule } from './movies-routing.module';
import { MoviesPage } from './movies.page';
import { SharedModule } from '../../shared/shared.module';
import { ColorOnHoverDirective } from '../../directives/colorOnHover/color-on-hover.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule,
    SharedModule,
    ColorOnHoverDirective
  ],
  declarations: [MoviesPage]
})
export class MoviesPageModule { }
