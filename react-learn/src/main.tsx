import { createRoot } from "react-dom/client";
import "./index.css";
// import UseReducerExample from "./component-learn/useReducer/UseReducerExample";
import ReducerForm from "./component-learn/useReducer/ReducerForm";
// import ToturialReducerCounter from "./component-learn/useReducer/ToturialReducerCount";
// import ReducerCounter from "./component-learn/useReducer/ReducerCount";

// import Home from "./pages/Home";
// import ToggleApp from "./component-learn/useContext/ToggleMode/ToggleApp";

// import App from "./component-learn/useContext/component/App";
// import Navbar from "./pages/Navbar";
// import Test from "./pages/Test";

createRoot(document.getElementById("root")!).render(
  <>
    {/* <Home /> */}
    {/* <ToggleApp /> */}
    {/* <ReducerCounter /> */}
    {/* <ToturialReducerCounter /> */}
    <ReducerForm />
    {/* <UseReducerExample /> */}
  </>
);
