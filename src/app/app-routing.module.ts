import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'todos' },
  {path: 'todos', component: TodosComponent },
  {path: 'todo/details/:index', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
