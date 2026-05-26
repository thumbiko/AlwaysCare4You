"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "teal" | "pink";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: "teal", toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("teal");

  useEffect(() => {
    const stored = localStorage.getItem("ac4y-theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "pink" ? "pink" : "");
    localStorage.setItem("ac4y-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "teal" ? "pink" : "teal");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
