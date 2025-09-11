import { useState } from "react";

function PropsCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-4 border rounded-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Props Counter Component</h2>
      <p>Count: {count}</p>
      <button onClick={increment} className="bg-blue-400 mr-2">
        Increment
      </button>
      <button onClick={decrement} className="bg-yellow-400 mr-2">
        Decrement
      </button>
      <button onClick={reset} className="bg-red-400">
        Reset
      </button>
    </div>
  );
}
export default PropsCounter;
