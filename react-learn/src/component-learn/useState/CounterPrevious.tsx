import { useState } from "react";

function CounterPrevious() {
  const [age, setAge] = useState(45);

  function incrementNumber() {
    setAge((a) => a + 1);
  }
  function decrementNumber() {
    setAge((a) => a - 1);
  }

  return (
    <div className="flex items-baseline justify-center">
      <h1>Your age: {age}</h1>
      <button
        className="button"
        onClick={() => {
          incrementNumber();
          incrementNumber();
          incrementNumber();
        }}
      >
        +3
      </button>
      <button
        className="button"
        onClick={() => {
          incrementNumber();
        }}
      >
        +1
      </button>
      <button
        className="button"
        onClick={() => {
          decrementNumber();
          decrementNumber();
        }}
      >
        -2
      </button>
    </div>
  );
}

export default CounterPrevious;
