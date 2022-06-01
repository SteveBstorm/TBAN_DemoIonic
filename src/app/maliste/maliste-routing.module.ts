import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalistePage } from './maliste.page';

const routes: Routes = [
  {
    path: '',
    component: MalistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalistePageRoutingModule {}
