import React, { useState, useEffect } from "react";

export default function Prime({ number }) {
  const [isPrime, setIsPrime] = useState(false);

  const determineIsPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
  };

  useEffect(() => {
    setIsPrime(determineIsPrime(number));
  }, [number]);

  return (
    <div id="prime" className={isPrime ? "prime-true" : "prime-false"}>
      PRIME
    </div>
  );
}
