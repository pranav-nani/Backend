// install express using npm install expres
//install package called dotenv 
// we have to create a .env file and can store variables there by doing this we can keep private data safely 
// use require('dotenv').config()
// and to use those variables process.env.Variable_name
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>This is a heading</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})