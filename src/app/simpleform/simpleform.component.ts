import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      'firstname': ['', [Validators.required, Validators.maxLength(10)]],
      'address': ['',  [Validators.required, Validators.maxLength(10)]],
      'country': ['']
    });
  }

  ngOnInit() {
  }

}
