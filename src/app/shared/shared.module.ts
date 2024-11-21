import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// Components
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CardComponent } from '../components/card/card.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
