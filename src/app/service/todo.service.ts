import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private API = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {

  }

  getTodoList(): Observable<any> {
    return this.httpClient.get(this.API);
  }
}
