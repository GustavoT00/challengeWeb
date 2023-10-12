import React, { useEffect, useReducer } from 'react'
import ToDoList from './ToDoList'
import useToDo from '../hooks/useToDo'
import ToDoAdd from './ToDoAdd'


const initialState = []

const ToDoApp = () => {
  const { todos, addTodo, onDeleteToDo, onToggleToDo, countTodos, countPendingTodos } = useToDo();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const newTodo = (todo) => {
    addTodo(todo);
  }

  return (
    <>
      <h1>ToDoApp: {countTodos()}, <small>Pendiente: {countPendingTodos()}</small></h1>  
      <div className="row">
        <ToDoAdd onNewToDo={newTodo} />
      </div>
      <div>
        Total Tareas: {countTodos()}<br />
        Pending Tareas: {countPendingTodos()}
      </div>
      <ToDoList todos={todos} onDeleteToDo={onDeleteToDo} onToggleToDo={onToggleToDo}/>
    </>
  )
}

export default ToDoApp;
