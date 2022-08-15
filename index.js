const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('config');
const PORT = config.get('port') || 3000

app.use('/api/auth', require('./routes/auth.router'))

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