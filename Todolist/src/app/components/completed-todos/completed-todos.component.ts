import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { Todo } from '../../model/todo';
import { User } from '../../model/user';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.scss']
})
export class CompletedTodosComponent implements OnInit {
  completedTodos: Todo[] = [];
  users: User[] = [];

  constructor(private todoService: TodoService, private userService: UserService) {}

  ngOnInit(): void {
    this.completedTodos = this.todoService.getCompletedTodos();
    this.users = this.userService.getUsers();
  }

  getUserName(userId: number): string {
    const user = this.userService.getUserById(userId);
    return user ? user.firstName : 'Unknown';
  }
}
