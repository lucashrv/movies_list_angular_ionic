import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CelebritiesPage } from './celebrities.page';

const routes: Routes = [
  {
    path: '',
    component: CelebritiesPage
  },
  {
    path: 'view',
    loadChildren: () => import('./view/view.module').then(m => m.ViewPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebritiesPageRoutingModule { }
