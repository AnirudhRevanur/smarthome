require('dotenv').config();
const { on } = require('events');
const Model = require('./models/powervalues');

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.MONGOSTRING
var ranges=[
    {Obj:'bulb',min:10,max:12},
    {Obj:'TV',min:60,max:85},
    {Obj:'fan',min:150,max:200},
]

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

//Post Method
app.post('/insert', (req, res) => {
    var totalmin=0;
    var totalmax=0;
    var count=0;
    for(var i=0;i<ranges.length;i++){
         totalmin=ranges[i].min
         totalmax=ranges[i].max
         count=count+1;
    }
    console.log("totalmin",totalmin)
    console.log("totalmax",totalmax)
    console.log("count",count)
    var timestamp=Math.floor(Date.now() / 1000);
    var Datetime=new Date()
    const data = new Model({
        total_current_value: req.body.total_current_value,
        number_appliances_switched_on: req.body.number_appliances_switched_on,
        timestamp: timestamp,
        Datetime : Datetime

    })

    try {
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

app.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        console.log(data)
        let response = []
        for (let i = 0; i < 2; i++){
            let response2 = {}
            response2['power_value'] = data[i]['total_current_value'] * 30;
            console.log(response2)
            response.push(response2)
            console.log(response)
        }
        res.json(response)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.listen(5000, () => {
    console.log(`Server Started at ${5000}`)
})


