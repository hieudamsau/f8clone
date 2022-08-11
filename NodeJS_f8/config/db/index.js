const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/f8_clone');
        console.log('connect successful !');
    }catch(err){
        console.log(err)
    }
}
 module.exports = {connect};