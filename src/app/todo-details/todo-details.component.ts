import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo, TodosService } from '../todos.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, map } from 'rxjs';
import { FaKeData, FakeDataService } from '../fake-data.service';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']  
})
export class TodoDetailsComponent {
  todo: Observable<Todo | undefined>;
  fakeData: Observable<FaKeData[] | undefined>;
  constructor(private todoService: TodosService, route: ActivatedRoute, readonly fakeDataService: FakeDataService) {
    this.todo = route.paramMap.pipe(map(params => {
      return this.todoService.todos.find(item => item.id === Number(params.get('id')));
    }))

    this.fakeData = this.fakeDataService.observableList;
  }
}
