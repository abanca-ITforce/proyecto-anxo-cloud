import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CountriesServiceService } from 'src/app/countries-service.service';


@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  countrieList$;

  constructor(private cs: CountriesServiceService) {
    this.countrieList$ = cs.getCountrieList$();

   }

  ngOnInit() {
  }

}
