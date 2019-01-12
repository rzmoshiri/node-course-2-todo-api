import {ObjectID} from "mongodb";

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongobb server ...')
    }
    console.log('Connected to mongoDB Server ...');

    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
       _id:new ObjectID('5c3362714437d00d84cbfa86')
    },{
        $set : {
            completed : true
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });


    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // })



   // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
   //  console.log('Todos : ');
   //  console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //     console.log('Unable to fetch any thing : ',err);
   // })


    // db.collection('Todos').find().count().then((count)=>{
    //  console.log(`Todos count : ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch any thing : ',err);
    // })




    // db.collection('Users').insertOne({
    //     name:'Reza',
    //     lastName:'Moshiri',
    //     age:30,
    //     location:['Tehran',{
    //         mahale:'AriaShahr',
    //         park:'Miad'
    //     }]
    //
    // },(err,result)=>{
    //     if(err){
    //         console.log('Unable to insert ...');
    //     }else{
    //         console.log(result.ops[0]._id.getTimestamp());
    //     }
    // });

    // client.close();
});