import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesComponent } from './countries.component';
import { ContryComponent } from './contry/contry.component';

const routes: Routes = [
  { path: '', component: CountriesComponent },
  {path:':id',component:ContryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
