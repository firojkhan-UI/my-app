import React, { useState, useMemo } from "react";


export default function IncComponent() {
  const [inc, setInc] = useState(0);
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h4>Value: {inc}</h4>
      <button onClick={() => setInc(inc + 1)}>update</button>
      <Factorial />
    </div>
  );
}

const Factorial = () => {
  const [number, setNumber] = useState(0);
  const fact = useMemo( () => 
    factorial(number)
  ,[number]) 
  return (
    <>
      <input
        // type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h3>Factorial: {fact}</h3>
    </>
  );
};

function factorial(n) {
  console.log(n,"Factorial calculation");
  return n <=0 ? 1 : n*factorial(n - 1);
}
