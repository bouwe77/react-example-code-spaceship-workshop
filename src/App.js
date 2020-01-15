import React, { useState } from "react";
import "./styles.css";
import Number from "./Number";
import Odd from "./Odd";
import Even from "./Even";
import Prime from "./Prime";

export default function App() {
  const [number, setNumber] = useState(13);

  return (
    <div>
      <Number number={number} setNumber={setNumber} />
      <div className="flex">
        <Prime number={number} />
        {number % 2 === 0 ? <Even /> : <Odd />}
      </div>
    </div>
  );
}
