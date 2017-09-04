import React from "react";

// Component receives changes from the Store and sends events to Actions

import Todo from "../components/Todo";
// Import all exports in TodoActions
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  // runs on init, good place to put event listeners
  componentWillMount() {
    TodoStore.on("change", () => {
      this.setState({
        todos: TodoStore.getAll(),
      });
    });
  }

  createTodo() {
    TodoActions.createTodo(Date.now());
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />
    });

    return (
      <div>
        <h1>Todos</h1>
        <button onClick={this.createTodo.bind(this)}>Create</button>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
