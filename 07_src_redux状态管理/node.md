# redux

## 什么是redux
- 是一个专门用来做状态管理的js库（不是react插件）
- 可以用在vue、react、angular项目中，但基本与react配合使用
- 作用：集中式管理react应用中的多个组件共享的状态

## 什么情况下需要使用redux
- 某个组件的状态，需要让其他组件可以随时拿到（共享）
- 一个组件需要改变另一个组件的状态（通信）
- 总体原则：能不用就不用，如果不用比较吃力才用

## redux工作流程图
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26b98b1864624057838f6b2259c72ba5~tplv-k3u1fbpfcp-watermark.image?)

## redux的三个核心概念
### action
- 动作的对象
- 包含两个属性
    - type：属性标识，值为字符串，唯一，必要属性
    - data：数据属性，值任意类型，可选属性
- 例子{type:'ADD_STUDENT', data: {name: 'tom', age: '18'}}

### reducer
- 用于初始化、加工状态
- 加工时，根据旧的state和action，产生新的state的纯函数

### store
- 将state、action、reducer联系在一起的对象
- 加工时，根据旧的state和action，产生新的state的纯函数

## 异步action
- 延迟的动作不想交给组件本身，想交给action
- 何时需要异步action：想要对状态进行操作，但是具体的数据考异步任务返回
> 异步action不是必须要写的，完全可以自己等待异步任务的结果再去分发同步action
```shell
yarn add redux-thunk
```
创建的action不再返回一个对象，而是一个函数，等异步任务有结果后，一般再去分发一个同步的action去真正操作数据

## react-redux
### react-redux VS redux
> 为了方便使用，Redux 的作者封装了一个 React 专用的库 React-Redux

### react-redux基本特性
`React-Redux` 将所有组件分成两大类：`UI组件`（presentational component）和`容器组件`（container component）

`UI组件`有以下几个特征。
- 只负责UI的呈现，不带有任何业务逻辑
- 没有状态（即不使用`this.state`这个变量）
- 所有数据都由参数（`this.props`）提供
- 不使用任何 `Redux` 的 `API`
`容器组件`的特征恰恰相反
- 负责管理数据和业务逻辑，不负责UI的呈现
- 带有内部状态
- 使用 `Redux` 的 `API`

总结：
`UI组件`负责UI的呈现，`容器组件`负责管理数据和逻辑，如果一个组件既有UI又有业务逻辑，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图


- 所有的UI组件都应该包裹一个容器组件，它们是父子关系
- 容器组件是真正与redux打交道的，里面可以随意调用redux的API
- UI组件中不能使用任何redux API
- 容器组件通过props给UI组件传递（1）redux中所保存的状态（2）用于操作状态的方法