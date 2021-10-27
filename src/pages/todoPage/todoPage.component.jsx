import React, { useState, useRef, useEffect } from 'react'
import TodoList from '../../components/todo/todoList.component'
import './todoList.styles.scss'
import { v4 as uuidv4 } from 'uuid';

export default function TodoPage() {

  //use state hook returns an array
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  const LOCAL_STORAGE_KEY = 'todos.app'

  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) {
      setTodos(storedTodos)
    }
  }, [])
  
  useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)

    todo.isComplete = !todo.isComplete;
    setTodos(newTodos)
  }


  function handleAddTodo(e) {
  const name = todoNameRef.current.value

  if(name === '' ) {
    alert('must add name')
  }
  console.log(name)
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, isComplete: false}]
  })
  
  todoNameRef.current.vaulue = null
}

function clearTodos() {

  const newTodos = todos.filter(todo => todo.isComplete === false)
  setTodos(newTodos)
}
  
  return (
    <div className='todo-main'>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <h1>To-Do List Page</h1>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}> Add Todo</button>
      <button onClick={clearTodos}>Clear Complete</button>
      <div>
        {todos.filter(todo => !todo.isComplete).length} left to do
      </div>
    </div>
  )
}