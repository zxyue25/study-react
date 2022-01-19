兄弟组件或者说任意组件通信

发布订阅模式
PubSubjs：https://www.npmjs.com/package/pubsub-js

A组件，发布消息
```js
// 发布消息
 search = () => {
    const {searchRef} = this
    // 发布消息
    PubSub.publish('userInfo', {isLoading: true})
    axios.get(`/api1/search/users?q=${searchRef.value}`).then(
        response => {
            // 发布消息
            PubSub.publish('userInfo', {isLoading: false, userList: response.data.items})
        },
        err => {
            // 发布消息
            PubSub.publish('userInfo', {isLoading: false, err: err.message})
        }
    )
}
```

B组件，订阅消息
```js
componentDidMount () {
    // 开始订阅
    this.token = PubSub.subscribe('userInfo', (_, data) => {
        // 接受两个参数，第一个msg，消息名称，一般用不到，可以用_占位
        // data发布消息的数据
        this.setState(data)
    })
}

componentWillUnmount () {
    // 取消订阅
    PubSub.unsubscribe(this.token)
}
```