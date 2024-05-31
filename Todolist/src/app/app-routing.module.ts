import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '',
   component: TodosComponent
  },
  { path: 'completed',
   component: CompletedTodosComponent
   },
  { path: 'users',
   component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
