const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/waferdb', ()=> console.log('Connected to the database'))
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

app.listen(8008, ()=> {
    console.log('Server up on port 8008')
})