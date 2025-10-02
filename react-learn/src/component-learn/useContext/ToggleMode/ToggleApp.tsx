import { ThemProvider, useTheme } from "./ThemContext";

const ThemContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#333" : "#ccc",
        color: isDarkMode ? "#ccc" : "#333",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{isDarkMode ? "dark mode" : "light mode"}</h1>
      <button onClick={toggleTheme}>click me</button>
    </div>
  );
};

export default function ToggleApp() {
  return (
    <ThemProvider>
      <ThemContent />
    </ThemProvider>
  );
}
