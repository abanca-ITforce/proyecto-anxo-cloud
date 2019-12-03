import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import {  MatListModule } from '@angular/material/list';
import { ContryComponent } from './contry/contry.component';




@NgModule({
  declarations: [CountriesComponent, ListCountriesComponent, ContryComponent],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MatListModule
  ]
})
export class CountriesModule { }
