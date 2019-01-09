const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongobb server ...')
    }
    console.log('Connected to mongoDB Server ...');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         console.log('Unable to insert ...');
    //     }else{
    //         console.log(JSON.stringify(result.ops,undefined,2));
    //     }
    // });


    db.collection('Users').insertOne({
        name:'Reza',
        lastName:'Moshiri',
        age:30,
        location:['Tehran',{
            mahale:'AriaShahr',
            park:'Miad'
        }]

    },(err,result)=>{
        if(err){
            console.log('Unable to insert ...');
        }else{
            console.log(result.ops[0]._id.getTimestamp());
        }
    });

    client.close();
});