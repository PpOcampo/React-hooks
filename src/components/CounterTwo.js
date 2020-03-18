import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(0, 3);

  return (
    <div>
      <h2>count ={count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterTwo;
