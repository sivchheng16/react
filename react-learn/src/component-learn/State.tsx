import React from "react";

export default function State() {
  const [name, setName] = React.useState("Chheng");
  const [age, setAge] = React.useState(19);

  const handleClick = () => {
    setName("John");
    setAge(25);
  };
  //   counter
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  //   counter with state are increment && decrement
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decreamentCounter = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <div className="p-4 border rounded-md">
        <h2 className="text-2xl font-bold mb-4">State Component</h2>
        <p>
          {name} is {age} years old
        </p>
        <button onClick={handleClick} className="bg-blue-400">
          Click Me
        </button>
      </div>
      {/*  */}
      <div className="p-4 border rounded-md mt-4">
        <h2 className="text-2xl font-bold mb-4">counter</h2>
        <p>count: {count}</p>
        <button onClick={increment} className="bg-yellow-400">
          add count
        </button>
      </div>

      {/* simple counter with state are increment && decrement */}

      <div className="p-4 border rounded-md mt-4">
        <h2 className="text-2xl font-bold mb-4">
          simple counter with state are increment && decrement
        </h2>
        <p>counter: {counter}</p>
        <button onClick={incrementCounter} className="bg-blue-400">
          incrementCounter
        </button>
        <br />
        <button onClick={decreamentCounter} className="bg-red-400">
          decrementCounter
        </button>
        <br />
        <button
          onClick={reset}
          className="bg-gradient-to-br from-fuchsia-400 to-emerald-600"
        >
          reset
        </button>
      </div>
    </div>
  );
}
