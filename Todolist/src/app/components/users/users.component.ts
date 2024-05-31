import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
import { User } from '../../model/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  todos: Todo[] = [];

  constructor(private userService: UserService, private todoService: TodoService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.todos = this.todoService.getTodos();
  }

  getUserTodos(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId);
  }
}
