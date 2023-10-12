import React, {useState} from "react";

export const ToDoAdd = ({onNewToDo}) => {
    const [text, setText] = useState('');

    const onFormSubmit = (event) => {
      event.preventDefault();
  
      if (text.trim() !== '') {
        const newTodo = {
          id: new Date().getTime(),
          description: text,
          done: false
        };
        onNewToDo(newTodo);
        setText('');
      }
    };
  
    return (
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tarea"
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    );
  };
  
  export default ToDoAdd;