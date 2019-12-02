import { Component, OnInit } from '@angular/core';
import { CountriesServiceService } from 'src/app/countries-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {
  countrieList;

  constructor(private cs:CountriesServiceService) {
    this.cs.getCountrieList$().subscribe(data=>(this.countrieList=data));
   }

  ngOnInit() {
  }

}
