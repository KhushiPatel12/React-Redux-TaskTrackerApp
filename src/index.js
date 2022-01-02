import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./reducer";
import { Provider } from "react-redux";
import App from "./App";

const mystore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={mystore}>
    <App />
  </Provider>,
  rootElement
);
