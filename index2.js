const express = require('express')
const app = express()

app.use (express.json()) // To Use Json Object 

let products = [
{id:1 , name :"Milk",price:2.6},
{id:2 , name: "Egg ", price:5},
{id:3 , name : "noodels" , price :20},
{id:4,name:"pepsi" , price : 10},
{id :5 , name : "coffe", price :15}


];




app.get('/', function (req, res) {
    res.send('hello world')
  })
  
const productbaseurl  = "/products";
let c = products.length ; 
  
// get all products 
app.get (productbaseurl, function(req,res){

    
    res.json(products);
})
// show products details by id 
app.get (productbaseurl+'/id', function(req,res){

    let ids = parseInt(req.param.id);
    const product = products.find(p=> p.id === ids);
    res.send('get product details  '+product.name);
})

app.post (productbaseurl , function(req,res){
// 1 check security 
// 2 get requst body and return to json 
 const product = {
     id   : c++ ,
     name : req.body.name , 
     price : req.body.price } 

//let ids = parseInt(req.param.id);
//  const product = products.find(p=> p.id === ids);
products.push(product);
    res.json(products);
})


app.put (productbaseurl+'/id', function(req,res){

    let ids = parseInt(req.params.id);
    const product = products.find(p=> p.id === ids);
    res.send('update product id '+product.name);
})
app.delete (productbaseurl+'/id', function(req,res){

    let ids = parseInt(req.params.id);
    
    const product = products.find(p=> p.id === ids);
    const index = products.indexOf(product);
    products.splice (index,1);
    res.json(products);
})



  app.listen(3000)