import { useState } from "react";
import OutputList from "../component-learn/Output-list";

export default function Test() {
  const [page, setPage] = useState("home");
  return (
    <div>
      <button
        onClick={() => {
          setPage("<OutputList />");
        }}
      >
        home
      </button>
      <button
        onClick={() => {
          setPage("call");
        }}
      >
        call
      </button>
      <button
        onClick={() => {
          setPage("about");
        }}
      >
        about
      </button>
      <div>{page}</div>
    </div>
  );
}
