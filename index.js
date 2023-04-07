const express = require('express');
const auth = require('./Auth/auth')
const app = express()
app.use(express.json())
app.use('/auth', auth)
app.get('/', (req, res) => {
    res.send('this is express server')
})

app.listen(1433, () => {
    console.log("Server is running")
})