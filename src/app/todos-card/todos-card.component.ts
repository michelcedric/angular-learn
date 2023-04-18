import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todos-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './todos-card.component.html',
  styleUrls: ['./todos-card.component.css']
})
export class TodosCardComponent {
  @Input() todo!: Todo;
  @Input() id!: Number;
  constructor(){} 
}
