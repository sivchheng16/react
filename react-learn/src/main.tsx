import { createRoot } from "react-dom/client";
import "./index.css";
import State from "./component-learn/State/State";
import OutputList from "./component-learn/Output-list";
import PropsCounter from "./component-learn/Props/PropsCounter";
import Prop from "./component-learn/Props/HomeProp";
import Gallery from "./component-learn/componentMemory/Gallery";
import Input from "./component-learn/State/Input";
createRoot(document.getElementById("root")!).render(
  <>
    <State />
    <OutputList />
    <PropsCounter />
    <Prop />

    {/* component memory */}
    <Gallery />
    <Input />
  </>
);
