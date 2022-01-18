配置代理的方式
- package.json配置proxy
作用：// 本地起服务，3000，3000请求不到的资源再找5000要
缺点：// 只能配置一个代理
```json
"proxy": "http://localhost:5000"
```

- setupProxy.js
配置代理