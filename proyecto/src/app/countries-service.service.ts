import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  url='https://api.worldbank.org/v2/country?per_page=1000&format=json';
  constructor(private http: HttpClient) { }
  getCountrieList$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data[1])));
  }
  getCountryById$(id) {
    return this.http
      .get<any>(this.url + '/' + id)
      .pipe(map(data => (data ? data : {})));
  }







}
