import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FsearcherPage } from './fsearcher.page';

const routes: Routes = [
  {
    path: '',
    component: FsearcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FsearcherPageRoutingModule {}
