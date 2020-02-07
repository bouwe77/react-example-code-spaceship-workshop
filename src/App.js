import React, { useState, useEffect } from "react";
import "./styles.css";
import Number from "./Number";
import Odd from "./Odd";
import Even from "./Even";
import Prime from "./Prime";
import Form from "./Form";
import { getFacts } from "./api";
import Fact from "./Fact";

export default function App() {
  const [number, setNumber] = useState(13);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    async function get() {
      await getFacts(number).then(result => {
        setFacts(result.facts);
      });
    }
    get();
  }, [number]);

  return (
    <div>
      <Form setNumber={setNumber} number={number} />
      <Number number={number} setNumber={setNumber} />
      <div className="flex">
        <Prime number={number} />
        {number % 2 === 0 ? <Even /> : <Odd />}
      </div>
      <div>
        {facts.map(fact => (
          <Fact key={fact.id} fact={fact.text} />
        ))}
      </div>
    </div>
  );
}
