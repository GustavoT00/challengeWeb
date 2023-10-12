import React from 'react'
import { useCounter } from '../hooks/useCounter';

const Counter = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Reducir</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default Counter;