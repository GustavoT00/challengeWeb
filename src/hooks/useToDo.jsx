import { useState } from 'react';

const useToDo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const onDeleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onToggleToDo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));     
  }

  const countTodos = () => {
    return todos.length;
  }

  const countPendingTodos = () => {
    return todos.filter(todo => !todo.done).length;
  }

  return { todos, addTodo, onDeleteToDo, onToggleToDo, countTodos, countPendingTodos };
}

export default useToDo;
