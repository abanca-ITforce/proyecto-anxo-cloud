import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { MatNavList } from '@angular/material/list';


@NgModule({
  declarations: [CountriesComponent, ListCountriesComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatNavList
  ]
})
export class CountriesModule { }
