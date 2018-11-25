import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];
  star1: Todo[] = [];
  star2: Todo[] = [];
  star3: Todo[] = [];
  category: Todo[] = [];
  todoCounter = 0;
  orderAsc = true;

  constructor(private storage: Storage) {

  }

  getTodos(): Promise<Todo[]> {
    this.storage.get('this.todoCounter').then(data => { if (data) { this.todoCounter = data } });
    return this.storage.get('todos').then(
      data => {
        if (data) {this.star3 = data.filter(t => t.stars === 3),
          this.star2 = data.filter(t => t.stars === 2),
          this.star1 = data.filter(t => t.stars === 1)
          if (this.orderAsc) {
            this.todos = this.category.concat(this.star1).concat(this.star2).concat(this.star3);
          } else {
            this.todos = this.category.concat(this.star3).concat(this.star2).concat(this.star1);
          }
          return this.todos;
        }
      });
  }

  saveTodo(t): Promise<Todo[]> { // devuelve una promesa
    this.todos[this.todos.findIndex(todo => todo.id === t.id)] = t;
    return this.storage.set('todos', this.todos);
  }

  newTodo(t): Promise<Todo[]> {
    this.todos.push(t);
    this.todoCounter++;
    return this.storage.set('todos', this.todos).then(() =>
      this.storage.set('todoCounter', this.todoCounter)
    ); // devolver promesa
  }

  deleteTodo(id: number): Promise<Todo[]> {
    this.todos = this.todos.filter(t => t.id !== id);
    return this.storage.set('todos', this.todos);
  }

  getTodoById(id: number): Todo {
    return this.todos.find(t => t.id === id);
  }
}