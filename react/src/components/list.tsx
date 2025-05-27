import { useState } from "react";

export const List = () => {
  const [formData, setFormData] = useState({
    goal: "",
    by: "",
  });

  const [goals, setGoals] = useState<
    Array<{ goal: string; by: string; id: number }>
  >([]);

  const handleAddGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      goal: e.target.value,
    }));
  };

  const handleAddBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      by: e.target.value,
    }));
  };

  const handleAddObject = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.goal.trim() && formData.by.trim()) {
      setGoals((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setFormData({ goal: "", by: "" });
  };

  const handleDeleteObject = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg m-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Goal Tracker
      </h2>

      <form onSubmit={handleAddObject} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Goal
            </label>
            <input
              type="text"
              value={formData.goal}
              onChange={handleAddGoal}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your goal"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complete By
            </label>
            <input
              type="text"
              value={formData.by}
              onChange={handleAddBy}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., End of month"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Add Goal
        </button>
      </form>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Your Goals ({goals.length})
        </h3>

        {goals.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No goals yet. Add your first goal above!
          </p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 text-lg mb-2">
                    {goal.goal}
                  </h4>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Complete by:</span> {goal.by}
                  </p>
                </div>

                <button
                  onClick={() => handleDeleteObject(goal.id)}
                  className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
