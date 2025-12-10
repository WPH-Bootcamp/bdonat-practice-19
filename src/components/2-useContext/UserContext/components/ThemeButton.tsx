import { useTheme } from "../hooks/useTheme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "black" : "white",
        color: theme === "light" ? "white" : "black",
        padding: "10px 16px",
        borderRadius: "360px",
      }}
    >
      Ubah ke {theme === "light" ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ThemeButton;
