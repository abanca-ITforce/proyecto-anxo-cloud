import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  Region$;
  regionCode : any;
  constructor(private api: ApiService,private ar: ActivatedRoute) {

  }

  ngOnInit() {
    this.regionCode =this.ar.snapshot.params.code;
    this.Region$ = this.api.getRegionCode$(this.regionCode);
  }

}
