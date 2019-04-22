import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material-demo';

  form: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.form = this.fb.group({
      'firstname': ['', [Validators.required, Validators.maxLength(10)]],
      'address': ['',  [Validators.required, Validators.maxLength(10)]],
      'country': ['']
    });
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe((res) => {
      console.log(res);
    });
  }

  submitForm(form) {
    console.log(form);
  }
}
