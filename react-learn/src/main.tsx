import { createRoot } from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";

// import App from "./component-learn/useContext/component/App";
// import Navbar from "./pages/Navbar";
// import Test from "./pages/Test";

createRoot(document.getElementById("root")!).render(
  <>
    <Home />
  </>
);
