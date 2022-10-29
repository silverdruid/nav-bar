const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))


app.all('*', (req, res) => {
    res.status(400).send('<h1>CONTENT NOT FOUND</h1>')
})

app.listen(5000, () => {
    console.log('server up');
})