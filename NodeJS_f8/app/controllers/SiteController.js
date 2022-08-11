const { model } = require('mongoose');
const Courses = require('../Courses');
const nodemailer = require('nodemailer');


class SiteController {
    // GET - home
    home(req,res,next) {
    
        res.render("home");
    }       
    search(req,res,next){
        Courses.find({})
        .then(course =>{
            course = course.map(course => course.toObject());
            res.render("search",{course});
        })
        .catch(next);
        
    }
}
module.exports=new SiteController;