const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const bcrypt = require('bcrypt')
const secret = require('./config/secret')
const user = require('./models/User')
const app = express()
const config = require('config')
const PORT = config.get('port') || 5000


app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/authRouter'))

async function start() {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`app started, ${PORT}`))
  } catch(e) {
    console.log('error', e.message);
    process.exit(1)
  }
}

start()