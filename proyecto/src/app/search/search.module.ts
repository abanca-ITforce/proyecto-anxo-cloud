import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchComponent, FormComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule

  ]
})
export class SearchModule { }
