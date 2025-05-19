import { useState } from "react";

export const Count = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((c) => c + 1);
  };

  const handleMinus = () => {
    setCount((c) => c - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
