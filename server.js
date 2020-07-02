require('dotenv').config()

const express = require('express') // pull express library
const app = express() // create an app variable to configure server
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error)) 
db.once('open', () => console.log('Connected to Database')) 

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started')) // Set server listen portal
