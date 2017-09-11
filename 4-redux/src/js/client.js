import { createStore } from "redux";

// Create a reducer to handle various actions
const reducer = function(state, action) {
  if (action.type === "INC") {
    return state+action.payload;
  }
  if (action.type === "DEC") {
    return state-action.payload;
  }
  return state;
}

// Create a store to handle states
const store = createStore(reducer, 0);
store.subscribe(() => {
  console.log("store changed", store.getState());
});

// Dispatch actions and payloads to the reducer
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 2});
store.dispatch({type: "INC", payload: 22});
store.dispatch({type: "DEC", payload: 1});
store.dispatch({type: "DEC", payload: 13});
store.dispatch({type: "DEC", payload: 3});
