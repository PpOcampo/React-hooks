import React, { useState } from "react";
import useCounter from "../hooks/useCounter";
const CounterOne = () => {
  const [count, increment, decrement, reset] = useCounter(5);
  return (
    <div>
      <h2>count ={count}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterOne;
