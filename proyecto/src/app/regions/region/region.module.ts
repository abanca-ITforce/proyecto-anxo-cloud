import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { RegionComponent } from './region.component';
import { MatCardModule } from '@angular/material/card';
import { RegionCardComponent } from './region-card/region-card.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegionComponent, RegionCardComponent],
  imports: [
    CommonModule,
    RegionRoutingModule,
    MatCardModule,
    SharedModule
  ]
})
export class RegionModule { }
