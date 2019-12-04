import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private api: ApiService) { }
  countriesIncomeLevel$ : Observable <any[]>;
  ngOnInit() {
    const incomeLevel='UMC';
    this.countriesIncomeLevel$=this.api.getCountriesByIncomeLevel$(incomeLevel);
  }

}
