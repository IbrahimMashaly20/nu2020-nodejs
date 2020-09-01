const express = require('express');
var app = express();

const fileupload = require('express-fileupload');

app.use(fileupload());

app.post("/cover", function(req, res, next) {
    const file = req.files.photo; // 
    file.mv('/NILE/online shop/file uploder/cover/' + file.name, function(err, result) {
     if(err) 
      throw err;
     res.send({
      success: true,
      message: "File uploaded!"
     });
    })
   })
app.listen(3000);