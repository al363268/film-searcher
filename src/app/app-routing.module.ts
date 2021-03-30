import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'fsearcher',
    pathMatch: 'full'
  },
  {
    path: 'fsearcher',
    loadChildren: () => import('./pages/fsearcher/fsearcher.module').then( m => m.FsearcherPageModule)
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./pages/movie/movie.module').then( m => m.MoviePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
