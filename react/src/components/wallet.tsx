import { useReducer } from "react";

const reducer = (
  state: { money: number },
  action: { type: "buy" | "sell" | "reset" }
) => {
  if (action.type === "buy") {
    return {
      money: state.money - 10,
    };
  }
  if (action.type === "sell") {
    return {
      money: state.money + 10,
    };
  }
  if (action.type === "reset") {
    return {
      money: 100,
    };
  }
  return state;
};
export const Wallet = () => {
  const [state, dispatch] = useReducer(reducer, { money: 100 });

  return (
    <div className="flex flex-col items-center justify-center p-8 m-6 rounded-2xl border border-gray-300 bg-white shadow-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        My Wallet (use Reducer)
      </h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{state?.money}</h1>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">BUY FOOD</h1>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch({ type: "buy" })}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "sell" })}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
