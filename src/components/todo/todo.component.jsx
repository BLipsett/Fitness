import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodo() {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
      <input type="checkbox" checked={todo.isComplete} onChange={handleTodo}></input>
      <h3>
      {todo.name}
      </h3>
      </label>
    </div>
  )
}
