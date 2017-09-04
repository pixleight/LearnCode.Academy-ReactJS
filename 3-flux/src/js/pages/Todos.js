import React from "react";

// Component receives changes from the Store and sends events to Actions

import Todo from "../components/Todo";
// Import all exports in TodoActions
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    // Bind this to this.getTodos everywhere
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  // runs on init, good place to put event listeners
  componentWillMount() {
    // Listen for the change emitter
    TodoStore.on("change", this.getTodos);
  }

  // Prevent memory leaks! This fires when the component unmounts; i.e., when the route changes
  componentWillUnmount() {
    // Remove any listener we created in the componentWillMount method
    TodoStore.removeListener("change", this.getTodos);
  }

  // Breakingo out getTodos into its own method
  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  reloadTodos() {
    // Call the reloadTodos Action
    TodoActions.reloadTodos();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });

    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.reloadTodos.bind(this)}>Reload</button>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
