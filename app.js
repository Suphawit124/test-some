const express = require('express')
const port = process.env.port || '0.0.0.0'
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello world!'})
})

app.listen(port, () => {
    console.log('The app is up and running!')
})

server.listen(5000);

module.exports = app