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
    <div className="flex flex-col items-center justify-center p-8 m-6 rounded-2xl border border-gray-300 bg-white shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{count}</h1>
      <div className="flex gap-4">
        <button
          onClick={handlePlus}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          +
        </button>
        <button
          onClick={handleMinus}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          -
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
