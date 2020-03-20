import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  constructor(private httpClient: HttpClient) { }

  getToDo() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');

  }
}
