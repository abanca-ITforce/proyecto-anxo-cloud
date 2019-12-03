import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServiceService } from 'src/app/countries-service.service';

@Component({
  selector: 'app-contry',
  templateUrl: './contry.component.html',
  styleUrls: ['./contry.component.css']
})
export class ContryComponent implements OnInit {
  countryId: any;
  constructor(activatedRoute: ActivatedRoute, cs: CountriesServiceService) {
     this.countryId= activatedRoute.snapshot.params.id;

  }

  ngOnInit() {
  }

}
