import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "写代码", done: true },
    ],
  };

  addTodo = (todoObj) => {
    this.setState({ todos: [todoObj, ...this.state.todos] });
  };

  updateTodo = (id, done) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, done };
      else return todo;
    });
    this.setState({ todos: newTodos });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: newTodos });
  };

  checkAllTodo = (flag) => {
    console.log(flag)
    const newTodos = this.state.todos.map((todo) =>
      Object.assign(todo, { done: flag })
    );
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer todos={todos} checkAllTodo={this.checkAllTodo} />
      </div>
    );
  }
}
