import React from 'react'
import { observer } from 'mobx-react'
import Todo from './Todo'
import TodoListStore from '../stores/TodoList'

const store = new TodoListStore()

store.addTodo('Get Weird')
store.addTodo('Now get espresso')

@observer
class SecondTodo extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <ul>
          {store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default SecondTodo
