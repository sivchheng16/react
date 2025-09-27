import { useState, useEffect } from "react";

export default function UpdateTittleCount() {
  const [count, setCount] = useState(0);

  function Count() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    document.title = `You click ${count} time`;
  }, [count]);
  return (
    <div>
      <button onClick={Count}>counter update title</button>
    </div>
  );
}
