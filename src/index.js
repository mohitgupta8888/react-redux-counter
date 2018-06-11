import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { createStore } from "redux";
import { Provider } from "react-redux";
import counterReduer from "./reducers";
import CounterContainer from "./containers/CounterContainer";

const appStore = createStore(
  counterReduer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <CounterContainer />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
