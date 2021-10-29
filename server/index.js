const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


/*let tasks = [];
let doneornot = {};*/
let taskdata = [];
let keys ={};
var port = process.env.port || 4000;


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/' , express.static('../build'));

app.get('/' , (req,res) => {
    res.send("Server running");
});

app.get('/tasks' , (req,res) => {
    res.send(taskdata);
});

app.post('/adddata' , (req , res) => {
    // console.log('req coming' , req);
    let msg = req.body.mssg;
    // console.log(msg);
    /*tasks.push(msg);
    doneornot[msg] = 0;*/
    var rndid = parseInt(1 + Math.random() * 10000 , 10);
    while(rndid in keys)
    rndid = parseInt(1 + Math.random() * 10000 , 10);
    let data = {
        id : rndid,
        task : msg,
        done : false
    };
    taskdata.push(data);
    keys[rndid] = taskdata.length-1;
    // console.log(taskdata);
    // console.log(keys);
    res.send(JSON.stringify({"status": 200, "error": null, "response": "Added successfully"}));
});

app.put('/done/:id' , (req , res) => {
    // console.log('req params ' , req.params.id);
    // console.log('req body' , req.body);
    var ind = keys[req.params.id];
    taskdata[ind].done = req.body.chk;
    res.send(JSON.stringify({"status": 200, "error": null, "response": "Added successfully"}));
});

app.delete('/remove/:id' , (req , res) => {
    // console.log('req params ' , req.params.id);
    // console.log('req body' , req.body);
    var ind = keys[req.params.id];
    taskdata.splice(ind , 1);
    delete keys[req.params.id];
    for( var ky in keys)
    if(keys[ky] >= ind)
    keys[ky]--;
    // console.log(keys);
    // taskdata[ind].done = req.body.chk;
    res.send(JSON.stringify({"status": 200, "error": null, "response": "Added successfully"}));
});




app.listen(port,()=>{
    console.log('Server running on 4000');
});