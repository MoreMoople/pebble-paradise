const express = require('express')
const app = express()
const bodyParser=require('body-parser')
app.get('/',async (req, res) => {
await res.sendFile(__dirname'/search.html')
})

 app.post('/craiglist',bodyParser.json(),async (req, res) => {
 var  craigslist = require('node-craigslist'),
  client = new craigslist.Client({
    city : 'las cruces'
  });

const listing=await client.search(req.body.search)
await res.send(listing)
})
app.listen(8080, () => console.log('Example app listening on port 3000!'))
