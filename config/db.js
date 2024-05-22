const mongoose = require('mongoose');

const connection  = mongoose.createConnection('mongodb://localhost:27017/todo').on('open', ()=>{
    console.log('db connected');
}).on('error', ()=>{
    console.log('db connection error');
})


module.exports = connection;