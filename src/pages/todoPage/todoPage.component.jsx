import React, { useState } from 'react'
import TodoList from '../../components/todo/todoList.component'
import './todoList.styles.scss'

export default function TodoPage() {

  //use state hook returns an array
  const [todos, setTodos] = useState([{id: 1, name: 'todo 1', isComplete: false}])
  
  return (
    <div className='todo-main'>
      <TodoList todos={todos} />
      <h1>To-Do List Page</h1>
      <input type="text" />
      <button> Add Todo</button>
      <button>Clear Complete</button>
    </div>
  )
}