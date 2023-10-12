import React from "react"
import { useCounter } from "../hooks/useCounter"
import QuoteComponent from "./QuoteComponent"

export const MultipleCustomHooks = () => {

    const { count, increment } = useCounter(1)

    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment Counter</button>
        <QuoteComponent counter={count} />
      </div>
    )
}


