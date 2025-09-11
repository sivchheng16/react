import { createRoot } from "react-dom/client";
import "./index.css";
import State from "./component-learn/State";
import OutputList from "./component-learn/Output-list";
import PropsCounter from "./component-learn/Prop/PropsCounter";
import PropsPearent from "./component-learn/Prop/PropsParents";

createRoot(document.getElementById("root")!).render(
  <>
    <State />
    <OutputList />
    <PropsCounter />
    <PropsPearent />
  </>
);
