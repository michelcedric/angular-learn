import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todos.service';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.css']
})
export class TodosCardComponent {
  @Input() todo!: Todo;
  @Input() index!: Number;
  constructor(){} 
}
