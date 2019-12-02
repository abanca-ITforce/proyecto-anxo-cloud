import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesServiceService {
  url='https://api.worldbank.org/v2/country';
  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe(data=>(this.url=data?data :[]));

  }
  getCountrieList$() {
    return this.http.get<any[]>(this.url).pipe(map(data => (data ? data : [])));
  }
}
