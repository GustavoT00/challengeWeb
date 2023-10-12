import React from 'react';

export const ToDoItem = ({ todo, onDeleteToDo, onToggleToDo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <input type='checkbox' checked={todo.done} onClick={() => onToggleToDo(todo.id)}/>
      <span  style={{color: todo.done? "green": "black"}}>{todo.description}</span>
      <button className="btn btn-danger" onClick={() => onDeleteToDo(todo.id)}>Borrar</button>
    </li>
  )
}

