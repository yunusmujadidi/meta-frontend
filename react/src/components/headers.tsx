import { useTheme } from "../hooks/use-theme";
import { cn } from "../lib/utils";
import { Switch } from "./switch";

export const Headers = () => {
  const { theme } = useTheme() || { theme: "light" };
  return (
    <div
      className={cn(
        "flex justify-between border border-blue-500 p-4 m-4",
        theme === "light"
          ? "bg-gray-100 text-black"
          : "bg-emerald-950 text-white"
      )}
    >
      <div>Logo</div>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:underline">
            <a href="">Home </a>
          </li>
          <li className="hover:underline">
            <a href="">About </a>
          </li>
        </ul>
      </nav>
      <Switch />
    </div>
  );
};
