import React from "react";

export default function Number({ number, setNumber }) {
  function decrement() {
    setNumber(number - 1);
  }

  function increment() {
    setNumber(number + 1);
  }

  return (
    <>
      <div>
        <button onClick={increment}>+</button>
        <h1>{number}</h1>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
}
