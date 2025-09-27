import { useEffect, useState } from "react";
export default function CounterUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  return <h1 className="app text-5xl">{count}</h1>;
}
