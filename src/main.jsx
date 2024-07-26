import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./assets/redux/store.js";
import BackgroundWrapper from "./assets/components/wrappers/backgroundWrapper.jsx";
import LangVariableProvider from "./assets/contexts/langVariableContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LangVariableProvider>
        <BackgroundWrapper>
          <App />
        </BackgroundWrapper>
      </LangVariableProvider>
    </Provider>
  </React.StrictMode>
);
