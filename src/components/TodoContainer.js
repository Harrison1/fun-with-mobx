import React from 'react'
import TodoList from ''./TodoList'
import TodoListStore from "../stores/TodoList"

const store = new TodoListStore()

store.addTodo("Get Coffee")
store.addTodo("Write simpler code")
store.todos[0].finished = true

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000)

const TodoContainer = () =>
  <div>
    <TodoList store={store} />
  </div>

export default TodoContainer
