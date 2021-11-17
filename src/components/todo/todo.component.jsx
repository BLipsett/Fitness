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
      <p>Would you like to add a color for your note tab</p>
      </label>
    </div>
  )
}
