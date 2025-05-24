import { useTheme } from "../hooks/use-theme";

interface SwitchProps {
  label?: string;
  className?: string;
}

export const Switch = ({ label, className = "" }: SwitchProps) => {
  // Get theme data from context
  const { theme, toggleTheme } = useTheme();

  // Is it dark mode? Simple boolean
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center ${className}`}>
      {label && (
        <label className="mr-3 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <button
        type="button"
        onClick={toggleTheme}
        className={`
          w-11 h-6
          relative inline-flex items-center rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${isDark ? "bg-blue-600" : "bg-gray-300"}
        `}
        role="switch"
        aria-checked={isDark}
        aria-label={label || "Toggle theme"}
      >
        <span
          className={`
            w-5 h-5
            inline-block rounded-full bg-white shadow-lg
            transform transition duration-200 ease-in-out
            ${isDark ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </button>
    </div>
  );
};
