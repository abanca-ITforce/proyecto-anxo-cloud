import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  region$ :Observable<any>;
  countryByRegionCode$ : Observable<any[]>;

  constructor(private api: ApiService,private ar: ActivatedRoute) {

  }

  ngOnInit() {
    const regionCode =this.ar.snapshot.params.regionCode;
    this.region$ = this.api.getRegionCode$(regionCode);
    this.countryByRegionCode$=this.api.getCountriesByRgionCode$(regionCode);
  }

}
