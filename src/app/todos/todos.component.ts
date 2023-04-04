import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodosService } from '../todos.service';
import { TodosCardComponent } from '../todos-card/todos-card.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodosCardComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos : Todo[];
  constructor(readonly todosService: TodosService){
    this.todos= todosService.todos;   
  }
}
