// import { useSearchParams } from "react-router-dom";
import { ThemeContext } from "./Context";
import Form from "./Form";
import { useState } from "react";

export default function ToggleApp() {
  const [theme, setTheme] = useState("light");

  function HandleToggleTheme() {
    {
      setTheme(theme === "dark" ? "light" : "dark");
    }
    console.log(theme)
  }
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>

      <button onClick={HandleToggleTheme} className="button"
        
      >
        {" "}
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </button>
    </>
  );
}
