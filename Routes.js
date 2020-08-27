var express = require('express')
var app = express()

var birds = require('./ birds')

  // ...
  
  app.use('/birds', birds)  




router.get('/ home ', function (req, res) {
    res.send('welcome Birds home page')
  })
  // 
  router.get('/about', function (req, res) {
    res.send('About birds')
  })
  
  

  // ...
  
  app.listen (4000);