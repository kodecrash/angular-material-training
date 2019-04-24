import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Observable } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList: Array<any> = [];

  constructor( private todoService: TodoService) {

  }

  ngOnInit() {
    
  }

  getTodos() {
    this.todoService.getTodoList().subscribe(data => {
      this.todoList = data;
    });
  }

}
