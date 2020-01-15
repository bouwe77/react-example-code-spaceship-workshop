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
      <div className="flex">
        <button onClick={decrement}>-</button>
        <div>{number}</div>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
