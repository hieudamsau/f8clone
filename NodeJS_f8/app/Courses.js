const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
    name : String,
    decription : String,
    image : String,
    slug : String,
    src : String,
})

module.exports = mongoose.model('Courses',courses);