import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { compose } from "redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./reducers";
import App from "./routes/App";
import "core-js/stable";
import "regenerator-runtime/runtime";

const initialState = {
  favoriteCharacters: [],
  sectionActive: "Characters",
};

const middleware = [];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// const composeEnhacers =
//   window.___REDUX_DEVTOOLS_EXTENSION_COMPOSE___ || compose;

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
