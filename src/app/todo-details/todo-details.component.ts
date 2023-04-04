import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodosService } from '../todos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  todo : Observable<Todo |undefined>;
  constructor(private todoService : TodosService, private route: ActivatedRoute){
    this.todo = route.paramMap.pipe(map(params => {
      return this.todoService.todos.find(item=>item.id===Number(params.get('id')));
    }))
  }
}
