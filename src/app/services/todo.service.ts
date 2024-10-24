import { Injectable } from '@angular/core';
import { ITodo } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

  public getTodos():ITodo[]{
    const todos=localStorage.getItem('todos');
    return todos ? JSON.parse(todos) as ITodo[] : []
  }

  public getTodo(id:number):ITodo|undefined{
    const todos=this.getTodos();
    return todos.find(todo=>todo.id==id);
  }

  public addTodo(todo:ITodo){
    const todos=[...this.getTodos(), todo];
    this.saveToDos(todos);
  }

  public updateTodo(updateTodo:ITodo){
    const todos=this.getTodos();
    const updatedTodos=todos.map(todo=>todo.id===updateTodo.id ? updateTodo : todo);
    this.saveToDos(updatedTodos);
  }

  public deleteTodo(id:number){
    const todos=this.getTodos();
    this.saveToDos(todos.filter(todo=>todo.id!==id));
  }

  private saveToDos(todos:ITodo[]){
    localStorage.setItem('todos', JSON.stringify(todos));
  }

 

}
