import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  search = async () => {
    const { searchRef } = this;
    // 发布消息
    PubSub.publish("userInfo", { isLoading: true });

    // 用fetch发请求
    try {
      const response = await fetch(`/api1/search/users?q=${searchRef.value}`);
      const data = await response.json();
      PubSub.publish("userInfo", {
        isLoading: false,
        userList: data.items,
      });
    } catch (err) {
      console.log(err);
      PubSub.publish("userInfo", { isLoading: false, err: err.message });
    }
  };

  render() {
    return (
      <div>
        <input
          ref={(c) => (this.searchRef = c)}
          type="text"
          placeholder="请搜索关键词"
        />
        <button onClick={this.search}>搜索</button>
      </div>
    );
  }
}
