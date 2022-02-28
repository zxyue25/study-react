const express = require('express')

const app = express()

app.use((request, response, next) => {
  console.log('有人请求了服务器5000')
  next()
})

app.get('/students', (request, response) => {
  const students = [
    { id: '001', name: 'jack', age: 20 },
    { id: '002', name: 'jona', age: 23 },
    { id: '003', name: 'dylan', age: 24 },
  ]
  console.log('请求来自于', request.get('Host'))
  response.send(students)
})

app.listen(5000, (err) => {
  if (!err) {
    console.log('启动成功')
  }
})