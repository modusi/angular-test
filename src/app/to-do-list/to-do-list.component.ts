import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/todo.service';
import { ITodo, TodoStatus } from '../models/models';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(private toDoService: ToDoService) { }
  public todos: ITodo[] = [];

  public todoStatus = TodoStatus;

  ngOnInit(): void {
    this.initTodos();
  }

  private initTodos() {
    this.todos = this.toDoService.getTodos();
  }

  public onDelete(id?: number) {
    if (id) {
      this.toDoService.deleteTodo(id);
      this.initTodos();
    }
  }

  public statusChange(todo:ITodo) {
    todo.status=todo.status==TodoStatus.pending?TodoStatus.complted:TodoStatus.pending
    this.toDoService.updateTodo(todo);
    this.initTodos();
 
  }

}
