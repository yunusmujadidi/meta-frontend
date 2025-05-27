import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState<string>("");

  const onReset = (e: React.MouseEvent) => {
    e.preventDefault();
    setName("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="flex items-center justify-center p-8 m-6 rounded-2xl border border-gray-300 bg-white shadow-lg">
      <form className="flex flex-col items-center space-y-6 w-full max-w-md">
        <input
          value={name}
          onChange={(e) => onChange(e)}
          placeholder="Enter your name..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 text-lg"
        />
        <h1 className="text-2xl font-semibold text-gray-800 min-h-[2rem]">
          {name ? `You typed: ${name}` : "Start typing..."}
        </h1>
        <button
          onClick={(e) => onReset(e)}
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!name}
        >
          Reset
        </button>
      </form>
    </div>
  );
};
