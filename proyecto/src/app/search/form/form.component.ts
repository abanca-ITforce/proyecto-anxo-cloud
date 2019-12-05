import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() incomeLevels: any[];
  @Output() filter = new EventEmitter<any>();
  searchForm: FormGroup;

  incomeLevel;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.fb.group({
      incomeLevel: ''
    });
  }


  onSubmit(){
    const filter = this.searchForm.value;
    this.filter.emit(filter);
  };



}
