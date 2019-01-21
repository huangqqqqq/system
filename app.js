// 这是服务器文件

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('首页');
})


app.listen(3000);
console.log('服务启动');