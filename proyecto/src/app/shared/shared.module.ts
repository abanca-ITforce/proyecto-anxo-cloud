import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";
import { CountriesListComponent } from "./countries-list/countries-list.component";
import { RegionListComponent } from './region-list/region-list.component';

@NgModule({
  declarations: [CountriesListComponent, RegionListComponent],
  imports: [CommonModule, MatListModule, RouterModule],
  exports: [CountriesListComponent,RegionListComponent]
})
export class SharedModule {}
