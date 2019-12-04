import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  searchForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm=this.fb.group({
      incomeLevel: ''
    });
  }

  searchClcik(){
    console.log('hola');
  };



}
