import { useEffect, useState } from "react";
import ChevronDownIcon from "@icons/ChevronDownIcon";
import MoonIcon from "@icons/MoonIcon";
import SunIcon from "@icons/SunIcon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
    document.documentElement.className = currentTheme;
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.style = "color-scheme: dark";
    } else {
      document.documentElement.style = "color-scheme: light";
    }
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div
      className="w-28 relative flex items-center text-sm text-gray-900 dark:text-white "
      style={{ direction: "rtl" }}
    >
      <span className="h-4 w-4 absolute top-1/2 left-2 transform -translate-y-1/2">
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </span>
      <select
        className="appearance-none w-full py-1 px-8 text-center bg-white cursor-pointer dark:bg-gray-700  font-normal border-2 border-gray-300 dark:border-gray-500 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:ring-offset-gray-200  dark:focus:ring-offset-gray-800"
        onChange={toggleTheme}
        value={theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <span className="h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2">
        <ChevronDownIcon />
      </span>
    </div>
  );
}
