import React, { Component } from "react";
import styles from "./index.module.css";

export default class Item extends Component {
  state = {
    isMouseEnter: false,
  };

  handleMouse = (isMouseEnter) => {
    return () => {
      this.setState({ isMouseEnter });
    };
  };

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    };
  };

  handleDelete = (id) => {
      if(window.confirm('确定删除嘛？')){
        this.props.deleteTodo(id)
      }
  }

  render() {
    const { id, name, done } = this.props;
    const { isMouseEnter } = this.state;
    return (
      <div
        className={styles.item}
        style={{ backgroundColor: isMouseEnter ? "#eee" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <div>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </div>
        <button
          style={{ display: isMouseEnter ? "block" : "none" }}
          onClick={() => this.handleDelete(id)}
        >
          删除
        </button>
      </div>
    );
  }
}
