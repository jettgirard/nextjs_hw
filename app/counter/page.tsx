"use client";

import { useState } from "react";

function CountButton({ increment, backgroundColor }) {
  const [count, setCount] = useState(0);

  
  function incrementCount() {
    setCount((previous) => {
      const next = previous + increment;
      return next;
    });
  }

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        type="button"
        onClick={incrementCount}
        style={{ backgroundColor, color: "white", padding: "0.5rem 1rem" }}
      >
        +{increment}
      </button>
      <p aria-live="polite">Count: {count}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <h1>Counters</h1>
      <CountButton increment={1} backgroundColor="#1d4ed6" />
      <CountButton increment={2} backgroundColor="#166531" />
    </main>
  );
}