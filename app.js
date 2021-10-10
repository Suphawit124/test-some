const express = require('express')
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = express()

app.get('/', (req, res) => {
    res.json({message: 'Hello world!'})
})

app.listen(port, host, () => {
    console.log('The app is up and running!')
})

module.exports = app