"use client";

import { useQueryState, parseAsInteger } from "nuqs";

export const Count = () => {
  const [count, setCount] = useQueryState("count", parseAsInteger);

  return (
    <div>
      <pre>count: {count}</pre>
      <button onClick={() => setCount(0)}>Reset</button>
      {/* handling null values in setCount is annoying: */}
      <button onClick={() => setCount((c) => (c ?? 0) + 1)}>+</button>
      <button onClick={() => setCount((c) => (c ?? 0) - 1)}>-</button>
      <button onClick={() => setCount(null)}>Clear</button>
    </div>
  );
};
