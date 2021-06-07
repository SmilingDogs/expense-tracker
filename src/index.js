import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./components/context/GlobalState";
import reportWebVitals from "./reportWebVitals";

 //todo App обродачивается в GlobalContextProvider  для доступа к стейту
ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
