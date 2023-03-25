const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('config')
const PORT = config.get('port') || 5000


app.use(express.json({ extended: true }))
// app.use(bodyParser.urlencoded({ extended:true }))

app.use('/api/auth', require('./routes/authRouter'))
app.use('/api', require('./routes/postRouter'))
app.use('/api', require('./routes/deleteRouter'))


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