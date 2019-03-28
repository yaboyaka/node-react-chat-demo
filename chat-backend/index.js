const express = require('express');
const app = express();
const models  = require('./models');
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/message/get', (req, res) => {
    let currentTime = new Date().getTime();
    let selectParams = {};
    createdAfter = Number(req.query.createdAfter)
    
    if(createdAfter === 0 ){
        selectParams = {
            limit: 10,
            order: [['created_at', 'DESC']]
        };
    }else{
        selectParams = {where: {created_at: {[Op.gt]: createdAfter}}}
    }

    models.Message.findAll(selectParams).then(messages => {
        res.send(JSON.stringify({msg: messages, createdAfter : currentTime}));
    }) 
});

app.post('/message/post', (req, res) => {
    models.Message.create({
        'username': req.body.username,
        'text':req.body.message,
        'created_at': new Date().getTime()
    })
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});