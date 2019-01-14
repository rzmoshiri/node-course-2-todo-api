var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');

var app = express();

var {ObjectID} = require('mongodb');

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id',(req,res)=>{
   var id = req.params.id;
   if (!ObjectID.isValid(id)){
       return res.status(404).send('id is not valid');
   }
   Todo.findById(id).then((todo)=>{
       if(!todo){
           return res.status(404).send();
       }
       res.send(todo);
   }).catch((e)=>res.status(400));

});


app.listen(3000, () => {
    console.log('Starting on port 3000');
});

module.exports = {app};


