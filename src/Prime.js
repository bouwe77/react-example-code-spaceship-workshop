import React from "react";

export default function Prime({ number }) {
  const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const bla = isPrime(number);

  return (
    <div id="prime" className={bla ? "prime-true" : "prime-false"}>
      PRIME
    </div>
  );
}
