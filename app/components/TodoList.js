import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) =>
  <ul>
    {todos.map((todo) =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>

const propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: React.PropTypes.func.isRequired
}

export default Object.assign(TodoList, propTypes)
