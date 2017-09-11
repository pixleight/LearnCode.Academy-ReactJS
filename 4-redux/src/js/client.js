import { combineReducers, createStore } from "redux";

// Create a reducer to handle users
// This could live in a separate file
const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      // Don't edit the state directly. Set state as a copy of the current state and then add new value from the payload
      state = {...state, name: action.payload};
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload};
      break;
    }
  }
  return state;
};

// Create a reducer to handle tweets
// This could live in a separate file
// Each reducer could act on the same action.type
const tweetsReducer = (state=[], action) => {
  switch(action.type) {
    case "ADD_TWEET": {
      return state.concat({
        id: Date.now(), //fake and ID using a timestamp
        text: action.payload,
      });
      break;
    }
  }
  return state;
};

// Combine the reducers; that object in the store becomes the reducer state
const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

// Create a store to handle states
const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

// Dispatch actions and payloads to the reducer
store.dispatch({type: "CHANGE_NAME", payload: "Chris"});
store.dispatch({type: "CHANGE_AGE", payload: 32});
store.dispatch({type: "CHANGE_AGE", payload: 33});
store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"});
store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"});
