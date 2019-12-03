import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contry',
  templateUrl: './contry.component.html',
  styleUrls: ['./contry.component.css']
})
export class ContryComponent implements OnInit {
  //country$;
  constructor(activatedRoute: ActivatedRoute) {
    const countryId= activatedRoute.snapshot.params.id;
   // this.country$=
  }

  ngOnInit() {
  }

}
