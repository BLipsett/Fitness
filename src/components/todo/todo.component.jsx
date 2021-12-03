import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
color: red;
font-size: 24px;
`

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
    <div>
      <Text>I am a component</Text>
    </div>
  </div>
  )
}
