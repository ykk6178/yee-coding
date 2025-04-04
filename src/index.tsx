import { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "./index.css";

const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
        <Footer />
      </HashRouter>
    </Provider>
  </StrictMode>
);
