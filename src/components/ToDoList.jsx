import React from 'react';
import {ToDoItem} from './ToDoItem';

const ToDoList = ({ todos, onDeleteToDo, onToggleToDo }) => {
  return (
    <div className="col-7">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <ToDoItem key={index} todo={todo} onDeleteToDo={onDeleteToDo} onToggleToDo={onToggleToDo}  />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
