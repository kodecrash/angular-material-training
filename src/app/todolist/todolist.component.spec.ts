import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from '../service/todo.service';
import { TodolistComponent } from './todolist.component';
import { from, of   } from 'rxjs';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TodolistComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display todo list on page load', () => {
    let service, fakeTodos = [];
    fakeTodos = [{ title: 'Test1', userId: '1', id: 1}, {title: 'Test2', userId: '2', id: 2}];
    service = TestBed.get(TodoService);
    spyOn(service, 'getTodoList').and.returnValue(of(fakeTodos));
    component.getTodos();
    fixture.detectChanges();
    expect(component.todoList.length).toEqual(2);
  });
});
