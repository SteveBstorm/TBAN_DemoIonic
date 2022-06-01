import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalistePageRoutingModule } from './maliste-routing.module';

import { MalistePage } from './maliste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalistePageRoutingModule
  ],
  declarations: [MalistePage]
})
export class MalistePageModule {}
