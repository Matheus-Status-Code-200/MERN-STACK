const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})
app.get('/user', function(req, res) {
    res.send('Hello tety!!')
})
app.get('/home', function(req, res) {
    res.send('Home!!')
})
app.listen(3000)