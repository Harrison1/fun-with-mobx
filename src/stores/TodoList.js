import { observable, computed, action } from "mobx"

import Todo from "./Todo"

export default class TodoListModel {
  @observable todos = []

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }

  @action
  addTodo(title) {
    this.todos.push(new Todo(title))
  }
}
