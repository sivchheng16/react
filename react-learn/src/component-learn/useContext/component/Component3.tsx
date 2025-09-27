import { useContext } from "react";
import { CreateContext } from "./CreateContext";

export default function Component3() {
  const user = useContext(CreateContext);
  
  return (
    <p>
      {`Hello, my name is ${user}${user === "Veasna" ? ", I'm 15 years old." : ""}`}
    </p>
  );
}
