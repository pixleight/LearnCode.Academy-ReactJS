import { EventEmitter } from "events";

// Store gets Actions from the Dispatcher and sends changes to the Component

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Bills",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  // Listen for actions
  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      // Get the RECEIVE_TODOS Action, set our todos list to the new list
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        // We changed something, so emit the change to the component
        this.emit("change");
      }
    }
  }
}

const todoStore = new TodoStore;

// Register dispatcher to handleActions method, bind to Store
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
