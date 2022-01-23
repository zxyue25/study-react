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