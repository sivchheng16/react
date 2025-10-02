import Gallery from "../component-learn/componentMemory/Gallery";
import OutputList from "../component-learn/Output-list";
import InputFocus from "../component-learn/refs/InputFocus";
import Ref from "../component-learn/refs/Refs";
import TimePass from "../component-learn/refs/TimePass";
import Page from "../component-learn/useContext/Context/App";
// import ToggleApp from "../component-learn/useContext/Toggle/ToggleApp";
// import App from "../component-learn/useContext/component/App";
// import Context from "../component-learn/useContext/Context/App";
// import App from "../component-learn/useContext/Context/App";
import CounterUseEffect from "../component-learn/useEffect/CounterUseEffect";
import UpdateTittleCount from "../component-learn/useEffect/UpdateTittleCount";
import CounterPrevious from "../component-learn/useState/CounterPrevious";
import Form from "../component-learn/useState/Form";
import Input from "../component-learn/useState/Input";
import HomeProp from "../component-learn/useState/Props/HomeProp";
import PropsCounter from "../component-learn/useState/Props/PropsCounter";
import State from "../component-learn/useState/State";
import TodoList from "../component-learn/useState/TodoList";
// import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      / {/* link reference to other component */}
      <State />
      <OutputList />
      <PropsCounter />
      <HomeProp />
      {/* component memory */}
      <Gallery />
      <Input />
      <Ref />
      <TimePass />
      <InputFocus />
      <CounterPrevious />
      <Form />
      <TodoList />
      <UpdateTittleCount />
      <CounterUseEffect />
      {/* <Context /> */}
      {/* <App /> */}
      <Page />
      {/* <ToggleApp /> */}
    </>
  );
}
