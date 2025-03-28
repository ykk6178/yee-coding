import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App";
import Nav from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <HashRouter>
      <Nav />
      <App />
    </HashRouter>
  </StrictMode>
);
