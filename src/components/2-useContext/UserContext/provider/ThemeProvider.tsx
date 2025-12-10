import { useState, type PropsWithChildren } from "react";
import { ThemeContext, type Theme } from "../context/ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
