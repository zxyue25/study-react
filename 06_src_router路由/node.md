## 一、什么是路由
一个路由就是一个`映射关系`

`key`为`路径`，`value`可能是`function`或`component`

## 二、路由分类
- **后端路由**（node）
    - `value`是`function`，用来处理客户端提交的请求
    - 注册路由：`router.get(path, function(req, res))`
    - 工作过程：当node接收到一个请求时，根据请求路径找到匹配路由，调用路由中的函数来处理请求，返回响应参数
- **前端路由**
    - `value`是`component`，用于展示页面内容
    - 注册路由：`<Route path="/home" element={<Home />} >`
    - 工作过程：当浏览器的`path`变为`home`时，当前路由组件就会变成`Home`组件

## 三、路由的原理
> npm包 history.js
- **history**
    - push
    - replace
    - 前进
    - 后退
    - push与replace的区别
- **hash**，锚点

## 四、react router实现
### 1、react-router-dom的理解
react的路由库分为三类
- web `react-router-dom`
- native
- any
所以我们用`react-router-dom`包，作用如下
- 专门用来实现一个SPA应用
> 版本,V6：目前最新版，与V5有较大改动，主要用来拥抱`hooks`，很多钩子，类式组件使用不了

### 2、react-router-dom相关API
**内置组件**
- `<BrowserRouter>`
- `<HashRouter>`
- `<Route>`
- `<Redirect>` V6已经废弃
- `<Link>`
- `<NavLink>`
- `<Switch>` V6已经废弃


## 五、路由基本使用，Link、Route
### 1、导航区写`Link标签`
`Link`标签上有`replace`参数，默认 false，即跳转路由要用 `push` 还是 `replace`
```js
<Link to="/home">home<Link>
```
编译为
```js
<a href="/home">home</a>
```
### 2、展示区写`Route`标签进行路由匹配
- V5通过`component={Home}`
- V6通过`element={<Home />`，并需要包裹在`Routes`标签中
```js
import Home from "./pages/home";
import About from "./pages/about";
// V5
<Route path="/home" component={Home} />
<Route path="/about" component={About} />

// V6
<Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
```
### 3、APP最外层包一层`<BrowserRouter>`或者`<HashRouter>`
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

## 六、路由组件&一般组件
- 定义
    - 一般组件直接使用，如`Home`
    - 路由组件通过路由监听渲染
- 文件夹位置不同
    - 一般组件放在`components`里面
    - 路由组件放在`pages`里面
- 收到的`props`不同
    - 一般组件传啥收啥
    - 路由组件能收到外层`Route`组件传的`props`

## 七、NavLink
### 1、基本使用
`NavLink`使用，支持高亮颜色，高亮`class`名默认为`active`，支持自定义

- V5通过`activeClassName`自定义选中态的类名
- V6通过给`className`传入**函数**，依赖`isActive`参数确定
```jsx
// V5
<NavLink className='link' activeClassName='nav-active' to="/home">
    home
</NavLink>
// V6
<NavLink className={({isActive}) => `link ${isActive ? 'nav-active' : ''}`} to="/home">
    home
</NavLink>
```
### 2、封装NavLink
> 标签体内容是一个特殊的标签属性，通过`this.props.children`可以获取标签体内容
封装为一个组件，避免NavLink高亮颜色重复写
```jsx
// src/components/app-nav-link/index
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppNavLink extends Component {
    render () {
        return (
            <div>
                <NavLink
                    className={({ isActive }) => `link ${isActive ? 'nav-active' : ''}`}
                    {...this.props}
                >
                    {this.props.children}
                </NavLink>
            </div>
        )
}
```
使用`AppNavLink`
```jsx
import AppNavLink from "./components/app-nav-link";

{
    [{ to: '/home', children: 'home' }, { to: '/about', children: 'about' }].map(nav =>
        <AppNavLink key={nav.to} {...nav} />
    )
}
```

## 八、Switch的使用
> router V5有这个标签，V6已被重命名为`<Routes>`
**单一匹配路由**，通常情况下`path`和`component`是`一一对应`的关系，`Switch`可以提高路由匹配效率

## 九、多级路径刷新页面样式丢失问题
解决方案
- `public/index.html` 中引入样式不写 `./` 写 `/`
- `public/index.html` 中引入样式不写 `./` 写 `%PUBLIC_URL%`
- 使用`HashRouter`

## 十、精准匹配与模糊匹配
- V5默认是**模糊匹配**，通过`在Route`配置加`exact`开启**精准匹配**
- V6默认开启**精准匹配**，加`/*`开启**模糊匹配**

## 十一、重定向
一般写在所有路由的最下方，当所有路由无法匹配的时候，跳转到兜底的路由
- V5通过`<Redirect to="/home" />`
- V6已废除`Redirect`标签，通过`<Route path="*" element={<Navigate to="/home" />} />`

```jsx
import { Route, Routes, Navigate, Redirect } from "react-router-dom";
// V5
<Routes className="route">
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Redirect to="/home" />
</Routes>

// V6
<Routes className="route">
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*" element={<Navigate to="/home" />} />
</Routes>
```

## 十二、嵌套路由
V5注册子路由需要写父路由的`path`值，V6的版本都不需要写`/`，只需要地址就行，也`不需要你写前面的路径`，只需要你写下个路径是啥就行
- 路由的匹配是按照注册路由的顺序执行的
```jsx
// V5

{/* 导航区 */}
{[
    { to: "/home", children: "home" },
    { to: "/about", children: "about" },
].map((nav) => (
    <AppNavLink key={nav.to} {...nav} />
))}

{/* 展示区 */}
<Switch className="route">
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Redirect to="/home" />
</Switch>

// pages/home/index.js
 <div style={{ display: 'flex' }}>
    <AppNavLink to='/home/message' children="message" />
    <AppNavLink to='/home/news' children="news" />
</div>

<Switch>
    <Route path="/home/message" component={HomeMessage} />
    <Route path="/home/news" component={HomeNews} />
</Switch>

// V6
// app.js
{/* 导航区 */}
{[
    { to: "/home", children: "home" },
    { to: "/about", children: "about" },
].map((nav) => (
    <AppNavLink key={nav.to} {...nav} />
))}

{/* 展示区 */}
<Routes className="route">
    <Route path="/home/*" element={<Home />} />
    <Route path="/about/*" element={<About />} />
    <Route path="*" element={<Navigate to="/home" />} />
</Routes>

// pages/home/index.js
 <div style={{ display: 'flex' }}>
    <AppNavLink to='message' children="message" />
    <AppNavLink to='news' children="news" />
</div>

<Routes>
    <Route path="message" element={<HomeMessage />} />
    <Route path="news" element={<HomeNews />} />
</Routes>
```
## 十三、路由向组件传递props
### 1、params传参
```jsx
// V5
{/* 向组件传递params参数 */}
<Link to={`detail/${msg.id}/${msg.title}`}>{msg.title}</Link>

{/* 声明接收params参数 */}
<Route path="detail/:id/:title" component={HomeMessageDetail} />

{/* 接收params参数 */}
const {id, title} = this.props.match.params
```

### 2、search传参
> `urlencoded编码`：类似`key=value&key=value`的编码方式，可用npm包`url-parse`处理，
```jsx
// V5

{/* 向组件传递search参数 */}
<Link to={`detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>

{/* 声明接收search参数(无需声明，正常注册即可) */}
<Route path="detail" component={HomeMessageDetail} />

// 接收search参数
import qs from 'url-parse'
const {search} = this.props.location
const {id, title} = qs.parse(search)
```
### 3、state传参
刷新并不会更新，因为存在了`history`里面，但是清除浏览器缓存再刷新就会丢失
```jsx
// V5

{/* 向组件传递state参数 */}
<Link to={{pathname: 'detail', state: {...msg}}}>{msg.title}</Link>

{/* 声明接收state参数(无需声明，正常注册即可) */}
<Route path="detail" component={HomeMessageDetail} />

// 接收state参数
const {id, title} = this.props.location.state
```
## 十四、编程式路由导航
- V5通过`this.props.history`上的`push`、`replace`、`go`、`back`、`forward`方法
- V6通过`useNavigate`的`navigate`
    - `naviaget(to)`默认就是`history.push`
    - `naviaget(to, { replace: true })`就是 `history.replace`
    - `naviaget(to: number)`就是`、history.go`
```jsx
// V5
this.props.history.push('XX')
this.props.history.replace('XX')
this.props.history.go(2)
this.props.history.back()
this.props.history.forward()

// V6
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
<button onClick={() => navigate(`detail/${news.id}/${news.title}`)}>push</button>
<button onClick={() => navigate(`detail/${news.id}/${news.title}`, {replace: true})}>replace</button>
```

## 十五、withRouter
`withRouter`可以加工一般组件，让一般组件具备路由组件所特有的`API`，返回的是一个新组件
> V6已废弃，V5中一般组件(非路由组件)想要用路由的API，比如`this.props.history.push()`，需要用`withRouter`包一层

## 十六、BrowserRouter & HashRouter
- **原理**不一样
  - BrowserRouter使用的是H5的`history` API，不兼容IE9以下版本
  - HashRouter使用的是URL的哈希值
- **url表现形式**不一样
  - BrowserRouter的路径中没有`#`
  - HashRouter的路径中包含`#`
- **刷新后对路由`state`参数的影响**
  - BrowserRouter`没有任何影响`，因为`state`存在`history`对象中
  - HashRouter刷新后会`导致路由state参数的丢失`