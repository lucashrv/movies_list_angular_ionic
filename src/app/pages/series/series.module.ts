import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeriesPageRoutingModule } from './series-routing.module';
import { SeriesPage } from './series.page';
import { SharedModule } from '../../shared/shared.module';
import { ColorOnHoverDirective } from 'src/app/directives/colorOnHover/color-on-hover.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeriesPageRoutingModule,
    SharedModule,
    ColorOnHoverDirective
  ],
  declarations: [SeriesPage]
})
export class SeriesPageModule { }
