import { createContext } from "react";

export const ThemContext = createContext({
  Them: "light",
  toggleThem: () => {},
});
