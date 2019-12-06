import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  countries$: Observable<any[]>;
  incomeLevels$: Observable<any[]>;

  constructor( private api: ApiService) { }


  ngOnInit() {

   this.incomeLevels$=this.api.getincomeLevel$();
  }
  onFilter(filter) {
    this.countries$ = this.api.getCountriesByFilter(filter);
  }

}
