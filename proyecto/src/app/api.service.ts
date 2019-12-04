import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private endPoint = 'https://api.worldbank.org/v2/country';
  private format = '?per_page=1000&format=json';
  private urlRegion = 'https://api.worldbank.org/v2/region/?format=json';
  private endPointRegion = 'https://api.worldbank.org/v2/region/';
  private endPointCountryByRegionCode='https://api.worldbank.org/v2/country?region=';
  private formatRegionById='&per_page=1000&format=json';



  constructor(private httpClient: HttpClient) {}

  getAllCountries$() {
    const url = this.endPoint + this.format;
    return this.httpClient.get<any[]>(url).pipe(map(result =>(result[1])));
  }

  getCountryById$(countryId) {
    const url = this.endPoint + "/" + countryId + this.format;
    return this.httpClient.get<any>(url).pipe(map(result => result[1][0]));
  }

  getRegions$(){
    const url2= 'https://api.worldbank.org/v2/region/?format=json';
    return this.httpClient.get<any[]>(url2).pipe(map(result =>(result[1])));
  }

  getRegionCode$(regionCode){
    const url=this.endPointRegion + regionCode + this.format;
    return this.httpClient.get<any>(url).pipe(tap(r => console.log(r)),map(result => result[1][0]));
  }

  getCountriesByRgionCode$(regionCode){
    const url =this.endPointCountryByRegionCode +regionCode +this.formatRegionById;
    return this.httpClient.get<any[]>(url).pipe(tap(r => console.log({r})),map(result => result[1]));

  }


}
