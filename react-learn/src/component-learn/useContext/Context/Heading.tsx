import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }: { children: any }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h1>{children}</h1>;
    case 3:
      return <h1>{children}</h1>;
    case 4:
      return <h1>{children}</h1>;
    case 5:
      return <h1>{children}</h1>;
    case 6:
      return <h1>{children}</h1>;
    default:
      throw Error("Unknow level:" + level);
  }
}
