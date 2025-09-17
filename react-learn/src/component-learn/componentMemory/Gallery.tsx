import { useState } from "react";
import { sculptureList } from "./Data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function showMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className={"p-4 bg-gray-800 m-4 text-white border rounded-md mt-4"}>
      <button onClick={handleNextClick} className="border p-2 m-2">
        Next
      </button>
      <h1>
        {sculpture.name} by {sculpture.artist}{" "}
      </h1>
      <h3>
        ({sculpture.id + 1} of {sculptureList.length})
      </h3>
      <button onClick={showMoreClick}>
        {showMore ? "Show Lest" : "Show More"}
      </button>
      {showMore && <p>{sculpture.description}</p>}

      <p>Age: {sculpture.age}</p>
      <h2>{sculpture.name}</h2>
    </div>
  );
}
