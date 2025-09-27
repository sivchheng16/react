import { CreateContext } from "./CreateContext";
import { useState } from "react";

import Component1 from "./Component1";

export default function App() {
  const [person, setPerson] = useState({ name: "Veasna", age: 15 });
  return (
    <CreateContext.Provider value={person.name}>
      <Component1 />
    </CreateContext.Provider>
  );
}
