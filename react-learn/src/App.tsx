import State from "./component-learn/useState/State";
import Home from "./pages/Home";

export default function App() {
  let component;
  switch (window.location.pathname) {
    case "/Home":
      component = <Home />;
      break;
    case "/State":
      component = <State />;
  }

  return <div>{component}</div>;
}
