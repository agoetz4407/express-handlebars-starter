const express = require('express')
const routes = require('./controllers')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(routes)

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))