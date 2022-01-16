import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <Item
            key={todo.id}
            {...todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    );
  }
}
