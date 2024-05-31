import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Todo } from '../../model/todo';
import { User } from '../../model/user';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  users: User[] = [];
  searchTerm: string = '';

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.users = this.userService.getUsers();
  }

  getUserName(userId: number): string {
    const user = this.userService.getUserById(userId);
    return user ? user.firstName : 'Unknown';
  }

  onTodoStatusChange(todo: Todo): void {
    this.todoService.updateTodoStatus(todo.id, todo.completed);
  }

  filteredTodos(): Todo[] {
    if (this.searchTerm === '') {
      return this.todos;
    } else {
      const searchTermLower = this.searchTerm.toLowerCase();
      return this.todos.filter(todo => {
        const user = this.userService.getUserById(todo.userId);
        return user && user.firstName.toLowerCase().includes(searchTermLower);
      });
    }
  }
}
