import { createRoot } from "react-dom/client";
import "./index.css";
import State from "./component-learn/useState/State";
import OutputList from "./component-learn/Output-list";
import PropsCounter from "./component-learn/useState/Props/PropsCounter";
import Prop from "./component-learn/useState/Props/HomeProp";
import Gallery from "./component-learn/componentMemory/Gallery";
import Input from "./component-learn/useState/Input";
import Ref from "./component-learn/refs/Refs";
import TimePass from "./component-learn/refs/TimePass";
import InputFocus from "./component-learn/refs/InputFocus";
import CounterPrevious from "./component-learn/useState/CounterPrevious";
import Form from "./component-learn/useState/Form";

createRoot(document.getElementById("root")!).render(
  <>
    <State />
    <OutputList />
    <PropsCounter />
    <Prop />

    {/* component memory */}
    <Gallery />
    <Input />
    <Ref />
    <TimePass />
    <InputFocus />
    <CounterPrevious />
    <Form />

  </>
);
