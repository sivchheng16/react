import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  
  return (
    <>
      <div>{count}</div>
      <br />
      <button onClick={incrementCounter}>+</button>
    </>
  );
}
