const express = require('express')

const port = 8080
const app = express()


app.use(express.static(__dirname + '/static'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.listen(port, () => {
  console.log(port)
})