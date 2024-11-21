import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'movies/view/:id',
    loadChildren: () => import('./movies/view/view.module').then(m => m.ViewPageModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./series/series.module').then(m => m.SeriesPageModule)
  },
  {
    path: 'series/view/:id',
    loadChildren: () => import('./series/view/view.module').then(m => m.ViewPageModule)
  },
  {
    path: 'celebrities',
    loadChildren: () => import('./celebrities/celebrities.module').then(m => m.CelebritiesPageModule)
  },
  {
    path: 'celebrities/view/:id',
    loadChildren: () => import('./celebrities/view/view.module').then(m => m.ViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
