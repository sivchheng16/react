import { useState, useRef, useEffect } from "react";

function TimePass() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  });

  return (
    <div className="app">
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button className="button" onClick={handleStart}>
        Star
      </button>
      <button className="button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}

export default TimePass;
