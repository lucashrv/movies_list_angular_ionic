import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ViewPageRoutingModule } from './view-routing.module';
import { ViewPage } from './view.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangeBorderColorOnHoverDirective } from 'src/app/directives/changeBorderColorOnHover/change-border-color-on-hover.directive';
import { FormatDatePtBrPipe } from 'src/app/pipes/formatDatePtBr/format-date-pt-br.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPageRoutingModule,
    SharedModule,
    ChangeBorderColorOnHoverDirective,
    FormatDatePtBrPipe
  ],
  declarations: [ViewPage]
})
export class ViewPageModule { }
