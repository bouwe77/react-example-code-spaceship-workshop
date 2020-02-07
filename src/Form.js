import React, { useRef, useEffect } from "react";

export default function Form({ setNumber, number }) {
  const numberRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setNumber(Number(numberRef.current.value));
  }

  useEffect(() => {
    numberRef.current.value = number;
  }, [number]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={numberRef} />
      <button type="submit">OK</button>
    </form>
  );
}
