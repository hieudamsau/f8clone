const { model } = require('mongoose');
const Courses = require('../Courses');
const nodemailer = require('nodemailer');


class MeController {

    storedCourses(req,res,next) {

        Courses.find({})
        .then(course =>{
            course = course.map(course => course.toObject());
            res.render("me/stored-course",{course});
        })
        .catch(next);
    }       
   
}
module.exports=new MeController;