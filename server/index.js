const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req,res)=>{
    res.end('Hello world!')
})

app.get('/products', (req, res) => {
console.log('get products page',req.query.p)
console.log('get products query',req.query.q)
const page = req.query.p || 1;
  fetch(`https://mapi.sendo.vn/mob/product/search?p=${page}&q=${req.query.q}&c=${req.query.c}`)
    .then(resData => resData.json())
    .then(json => res.json(json))
    .catch(err => res.json([]))
})

app.listen(4000, () => {
  console.log('Server is listening on port 4000')
})
