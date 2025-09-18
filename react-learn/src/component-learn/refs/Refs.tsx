import { useRef } from "react";

function Ref() {
  let ref = useRef(0);

  function handleClick() {
    ref.current += 1;
    alert("you click" + " " + ref.current + " " + "time");
  }
  return (
    <button onClick={handleClick} className="button">
      click me
    </button>
  );
}
export default Ref;
