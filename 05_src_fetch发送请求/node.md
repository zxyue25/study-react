
网络请求

- xhr，原生，不要用，不要操作，window内置
  - jquery，对xhr的封装，需要下载第三方包，但是有回调地狱
  - axios，对xhr的封装，需要下载第三方包，promise风格
- fetch，原生，window内置，promise风格


关注分离原则


fetch发送请求

使用率不高，因为浏览器支持度不高
https://segmentfault.com/a/1190000003810652

关注分离

```js
 // 用fetch发请求
try {
    const response = await fetch(`/api1/search/users?q=${searchRef.value}`);
    const data = await response.json();
} catch (err) {
    console.log(err);
}
```