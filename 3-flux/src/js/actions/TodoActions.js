import dispatcher from "../dispatcher";

// Create our various actions, received from the component and sent on to the dispatcher

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
// Normally, we'd load the data via ajax:
//  axios("https://someurl.com/somedataendpoint").then((data) => {
//    console.log("got the data!", data);
//  });

  // Dispatch a FETCH_TODOS action -- this could load a loading screen etc
  dispatcher.dispatch({type: "FETCH_TODOS"});

  // Faking the loading of data with a 1-second timeout:
  setTimeout(() => {
    // Dispatch the RECEIVE_TODOS with some data
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 1134646313,
        text: "Go Shopping Again",
        complete: false,
      },
      {
        id: 2356846759,
        text: "Hug Wife",
        complete: true,
      },
    ]});
  }, 1000);
}
