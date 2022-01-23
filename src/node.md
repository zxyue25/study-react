路由

## 什么是路由
一个路由就是一个映射关系
key为路径，value可能是function或component

## 路由分类
- 后端路由，node
    - value是function，用来处理客户端提交的请求
    - 注册路由：router.get(path, function(req, res))
    - 工作过程：当node接收到一个请求时，根据请求路径找到匹配路由，调用路由中的函数来处理请求，返回响应参数
- 前端路由
    - value是component，用于展示页面内容
    - 注册路由：<Route path="/test" component={Test} >
    - 工作过程：当浏览器的path变为test时，当前路由组件就会变成Test组件


## 路由的原理
npm包 history.js
- history
    - push
    - replace
    - 前进
    - 后退
    - push与replace的区别
- hash，锚点

## react router实现
### react-router-dom的理解
react的路由库分为三类
- web `react-router-dom`
- native
- any
所以我们用`react-router-dom`包，作用如下
- 专门用来实现一个SPA应用

### react-router-dom相关API
内置组件
- <BrowserRouter>
- <HashRouter>
- <Route>
- <Redirect>
- <Link>
- <NavLink>
- <Switch>
其他

## 路由基本使用
1. 导航区写Link标签
```js
<Link to="/home">home<Link>
```
编译为
```js
<a href="/home">home</a>
```
2. 展示区写`Route`标签进行路由匹配，并且需要包裹在`Routes`标签中
```js
<Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
</Routes>
```
3. APP最外层包一层<BrowserRouter>或者<HashRouter>

## 路由组件&一般组件
- 定义
    - 一般组件直接使用，如`Home`
    - 路由组件通过路由监听渲染
- 文件夹位置不同
    - 一般组件放在`components`里面
    - 路由组件放在`pages`里面
- 收到的`props`不同
    - 一般组件传啥收啥
    - 路由组件能收到外层`Route`组件传的`props`

## NavLink的使用
```jsx
NavLink使用，支持高亮颜色，高亮class名默认为active，直接自定义
<NavLink className={({isActive}) => `link ${isActive ? 'nav-active' : ''}`} to="/home">
    home
</NavLink>
```