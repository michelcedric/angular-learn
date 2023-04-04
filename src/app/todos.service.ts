import { Injectable } from '@angular/core';

export interface Todo {
  name: string;
  description: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Todo[] = [
    {
      name: 'Todo 1',
      description: 'My first todo with Angular AAAA',
      id: 1
    },
    {
      name: 'Todo 2',
      description: 'My second todo with Angular 42',
      id:2
    }
  ];
  constructor() { }
}
