const express = require('express')
const people = require('./routes/people')
const login = require('./routes/auth')
const app = express()

// static assets
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

// parse form data
app.use(express.urlencoded({ extended: false }))

app.use('/api/people', people)
app.use('/login', login)






app.listen(5000, () => {
    console.log('second app');
})