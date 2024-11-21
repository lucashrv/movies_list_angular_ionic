import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CelebritiesPageRoutingModule } from './celebrities-routing.module';

import { CelebritiesPage } from './celebrities.page';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CelebritiesPageRoutingModule,
    SharedModule
  ],
  declarations: [CelebritiesPage]
})
export class CelebritiesPageModule { }
