const express = require('express');
const app = express();

app.use(express.json())

let books = [
{isbn : 1632 , title : " The Power of Now ", publisher :"New world Library  "},
{isbn : 1633 , title : "Black Beauty ", publisher:"The Jarrold Group"},
{isbn : 1634 , title: "Drive  ", publisher: " Riverhead Books "},
{isbn : 1635 , title : "Go Giver ", publisher: " Penguin Books"}

];

let l = books.length; 
const bookurl = "/books";
// An Welcome Page 

app.get ( ' / ', function(req , res ){
    res.send ('Welocome To The World Of Books ');
})
// Return Books 
app.get ( bookurl , function(req , res ){
    res.send ('Our Books To Read Or Listen Or Borrow  ');
    res . json (books );
})
// get book by its ISBN


app.get( bookurl + '/isbn ',function(req,res ){

    let isbns = parseInt(req.param.isbn);
    const book = books.find (p=>p.isbn ===isbns);
    res.send ('get book Details ' + book.title);
})
// 
app.post ( bookurl , function(req,res){
    const book = {
        isbn : l++ , 
        title : req.body.title , 
        publisher : req.body.publisher 
    }
    books.push(book ); 
    res.json (books);
})

app.put (bookurl + '/isbn ', function(req,res){
      let isbns = parseInt(req.params. isbn ); 
      const book = books.find(p => p.isbn ===isbns);
      res.send ("update Book Inforamtion " + book . title);


})

app . delete ( bookurl + '/isbn ', function(req,res ){

    let isbns = parseInt(req.params.isbn ); 
    const book = books.find(p => p.isbn ===isbns); 
    const index = books. indexOf(book ); 
    books.splice (index , 1 );
    res.json (books );


})

app.listen(5000)