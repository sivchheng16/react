import { useState } from "react";
// import UpdateTittleCount from "../component-learn/useEffect/UpdateTittleCount";
import State from "../component-learn/useState/State";
import OutputList from "../component-learn/Output-list";
import PropsCounter from "../component-learn/useState/Props/PropsCounter";
import HomeProp from "../component-learn/useState/Props/HomeProp";
import Gallery from "../component-learn/componentMemory/Gallery";
import Input from "../component-learn/useState/Input";
import Ref from "../component-learn/refs/Refs";
import TimePass from "../component-learn/refs/TimePass";
import InputFocus from "../component-learn/refs/InputFocus";
import CounterPrevious from "../component-learn/useState/CounterPrevious";
import Form from "../component-learn/useState/Form";
import TodoList from "../component-learn/useState/TodoList";

export default function Navbar() {
  const [page, setPage] = useState("UpdateTittleCount");
  return (
    <div className="nav">
      <button onClick={() => setPage("updatetittle")} className="logo">
        <h1>Home</h1>
      </button>

      <div className="link">
        <button onClick={() => setPage("")}>
          <State />
          {"state "}
        </button>
        <button onClick={() => setPage("outputlist")}>
          <OutputList />
        </button>
        <button onClick={() => setPage("propscounter")}>
          <PropsCounter />
        </button>
        <button onClick={() => setPage("homepage")}>
          <HomeProp />
        </button>
        <button onClick={() => setPage("garllery")}>
          <Gallery />
        </button>
        <button onClick={() => setPage("input")}>
          <Input />
        </button>
        <button onClick={() => setPage("ref")}>
          <Ref />
        </button>
        <button onClick={() => setPage("timepass")}>
          <TimePass />
        </button>
        <button onClick={() => setPage("inputfocus")}>
          <InputFocus />
        </button>
        <button onClick={() => setPage("counterprivous")}>
          <CounterPrevious />
        </button>
        <button onClick={() => setPage("form")}>
          <Form />
        </button>
        <button onClick={() => setPage("rodolist")}>
          <TodoList />
        </button>
      </div>

      <div>{page}</div>
    </div>
  );
}
