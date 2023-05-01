const express = require('express')
const db = require('../build/json/_metadata.json')

const PORT = process.env.PORT || 5000

const app = express().set('port', PORT)

app.get('/', function(req, res) {
  res.send({
    "name": "Pandas",
    "description": "Pandas are adorable pandas. Adopt one today to make us reach. Jump on the NFT bandwagon and get your own Panda!",
    "image": "https://storage.googleapis.com/nft-bobcats/cat-0.png",
    "seller_fee_basis_points": 100,
    "fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721"
  });
})

app.get('/api/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id);
  const panda = db[tokenId];
  res.send({
    description: panda.description,
    image: 'https://storage.googleapis.com/nft-bobcats/' + panda.image,
    name: panda.name,
    attributes: panda.attributes,
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})