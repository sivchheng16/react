import { useContext } from "react";
import { ThemeContext } from "./Context";

export default function Form() {
  const [theme] = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-800 text-white app "
          : "bg-white text-black app "
      }
    >
      <button>Sign in</button>
      <br />
      <button>Log in</button>
    </div>
  );
}
