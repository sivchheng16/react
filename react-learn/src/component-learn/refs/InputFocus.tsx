import { useEffect, useRef } from "react";

export default function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  }

  return (
    <div className="app">
      <input type="text" ref={inputRef} className="input" />
      <button onClick={handleClick} className="button">
        Search
      </button>
    </div>
  );
}
