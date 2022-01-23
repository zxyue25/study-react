import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class List extends Component {
  state = {
    userList: [],
    isLoading: false,
    err: "",
  };

  componentDidMount() {
    // 开始订阅
    this.token = PubSub.subscribe("userInfo", (_, data) => {
      // 接受两个参数，第一个msg，消息名称，一般用不到，可以用_占位
      // data发布消息的数据
      this.setState(data);
    });
  }

  componentWillUnmount() {
    // 取消订阅
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { userList, isLoading, err } = this.state;
    return (
      <div>
        {isLoading
          ? "loading..."
          : err
          ? err
          : userList.map((user) => (
              <div key={user.id}>
                <img src={user.avatar_url} alt="头像" />
                <div>{user.login}</div>
              </div>
            ))}
      </div>
    );
  }
}
