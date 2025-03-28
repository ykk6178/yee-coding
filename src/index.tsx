import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Nav from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <BrowserRouter basename="/yee-coding">
      <Nav />
      <App />
    </BrowserRouter>
  </StrictMode>
);
