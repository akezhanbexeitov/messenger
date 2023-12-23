const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, '../../dist/')))
app.use(express.static(path.join(__dirname, '../assets/')))

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})
