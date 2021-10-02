import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers"; /*2차*/

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
