import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        const {searchRef} = this
        // 发布消息
        PubSub.publish('userInfo', {isLoading: true})
        axios.get(`/api1/search/users?q=${searchRef.value}`).then(
            response => {
                PubSub.publish('userInfo', {isLoading: false, userList: response.data.items})
            },
            err => {
                PubSub.publish('userInfo', {isLoading: false, err: err.message})
            }
        )
    }
    render() {
        return (
            <div>
                <input ref={c => this.searchRef = c} type='text' placeholder='请搜索关键词'  />
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}
