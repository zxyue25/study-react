import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {
        console.log(response)
        console.log('请求成功了')
      },
      error => {
        console.log(error)
        console.log('请求失败了')
      }
    )
  }
  render() {
    return <div>
      <button onClick={this.getData}>点我获取数据</button>
    </div>;
  }
}
