import { useEffect, useState } from "react";

export const Title = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  useEffect(() => {
    document.title = toggle ? "Welcome to my site" : "Using the useEffect hook";
  }, [toggle]);

  return (
    <div className="p-4 m-4 flex flex-col items-center justify-center">
      <div>
        <h2>{toggle && "Changing the document title using useEffect Hook"}</h2>
      </div>
      <div>
        <button
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none mt-5"
          onClick={handleToggle}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};
