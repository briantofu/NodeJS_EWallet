const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const accountRouter = require('./server/routers/AccountRoute');
const loanRouter = require('./server/routers/LoanRoute');

const app = express();

//Load View Engine
app.set('views',path.join(__dirname,'./server/views'));
app.set('view engine','pug');

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false }));
//parse application/json
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/account',accountRouter);
app.use('/loan',loanRouter);

app.get('/',(req,res) => {
    res.render('index',{
        title:"Wallet Account"
    });
});


app.listen(4000,() => {
  console.log('Server started on port 4000');
})