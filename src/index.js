import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import BurgerReducer from "./Redux/reducer/BurgerReducer";
import orderReducer from "./Redux/reducer/orderReducer";
import signupReducer from "./Redux/reducer/signupLoginReducer";
import thunk from "redux-thunk";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("MyLoggerMiddleware: Dispatching ==> ", action);
      console.log("MyLoggerMiddleware: State BEFORE : ", store.getState());
      const result = next(action);
      console.log("MyLoggerMiddleware: State AFTER : ", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  BurgerReducer,
  orderReducer,
  signupReducer,
});

const middlewares = [logger, thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
