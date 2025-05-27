import { useState } from "react";

export const User = () => {
  const [user, setUser] = useState({
    name: "Yunus",
    joindate: "27 May 2025",
    online: true,
  });

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({
      ...prevUser,
      name: e.target.value,
    }));
  };

  const handleOnline = () => {
    setUser((prevUser) => ({
      ...prevUser,
      online: !prevUser.online,
    }));
  };
  return (
    <div className="flex flex-col items-center p-6 m-4 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <div
          className={`w-3 h-3 rounded-full mr-2 ${
            user.online ? "bg-green-500" : "bg-gray-400"
          }`}
        />
        <span className="text-sm text-gray-600">
          {user.online ? "Online" : "Offline"}
        </span>
      </div>

      <div className="text-2xl font-bold text-gray-800 mb-2">{user.name}</div>

      <div className="text-sm text-gray-500 mb-6">Joined: {user.joindate}</div>

      <div className="w-full mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          value={user.name}
          onChange={handleName}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your name"
        />
      </div>

      <button
        onClick={handleOnline}
        className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
          user.online
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {user.online ? "Go Offline" : "Go Online"}
      </button>
    </div>
  );
};
