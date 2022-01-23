一
- 父组件与子组件通信，通过props
- 子组件与父组件通信，父组件需要先向自组件传递一个props函数，然后子组件调用props上的函数传参


二
配置代理的方式
- package.json配置proxy
作用：// 本地起服务，3000，3000请求不到的资源再找5000要
缺点：// 只能配置一个代理
```json
"proxy": "http://localhost:5000"
```

- setupProxy.js
配置代理，具体见setupProxy文件


三
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