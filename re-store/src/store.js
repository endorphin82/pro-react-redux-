import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";
// import compose from "./utils/compose";

const logMiddleware = ({ getState, dispatch }) => (nextDispatch) => (action) => {
  console.log(action.type, getState());
  return nextDispatch(action);
};

const stringMiddleware = () => (nextDispatch) => (action) => {
  if (typeof action === "string") {
    return nextDispatch({
      type: action
    });
  }

  return nextDispatch(action);
};

const store = createStore(reducer,
  applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware
  )
);

const delayedActionCreator = (timeout = 5000) => (dispatch) => {
  setTimeout(() => dispatch({
    type: "DELAYED_ACTION"
  }), timeout);
};

store.dispatch(delayedActionCreator(3000));
store.dispatch("HELLO_WORLD");

export default store;