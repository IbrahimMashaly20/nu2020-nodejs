const express = require('express');
const app = express();
app.use(express.json());


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

  const Schema = mongoose.Schema;
  
  const personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });
  
  const Story = mongoose.model('Story', storySchema);
  const Person = mongoose.model('Person', personSchema);
//=================================================
//   const author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
//   console.log(author.name);
//   author.save(function (err) {

//     if (err) return handleError(err);
  
//     const story1 = new Story({
//    
Story . 
findOne({title :'casino Royale  '}). 
populate ('author').
exec(function(err,story){

    if (err) return handleError(err) ; 
    console.log("the author is ",story.author.name);
});

app.listen(3000);