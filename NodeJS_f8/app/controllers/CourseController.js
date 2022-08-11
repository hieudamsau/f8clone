const { model } = require('mongoose');
const Courses = require('../Courses');
const nodemailer = require('nodemailer');


class CourseController {
    // GET - home
    show(req,res,next) {
   
        Courses.find({})
        .then(course =>{
            course = course.map(course => course.toObject());
            res.render("course",{course});
        })
        .catch(next);
        
    } 
    lead(req,res,next){
        Courses.findOne({ slug: req.params.slug }).lean()
        .then((course) =>{
                res.render('course/show',{course});
            })
        .catch(next);
    }  
    //GET course/create
    create(req,res,next){
        res.render('course/create');
    }

     //Post course/store
    store(req,res,next){
        // res.json(req.body);
        const course = new Courses(req.body);
        course.save(function(err){
            if(err) return handleError(err);
        });
        res.redirect('/courses');
    }
    //Post course/edit
    edit(req,res,next){
         Courses.findById(req.params.id).lean()
         .then(course =>{
            res.render("course/edit",{course});
         })
         .catch(next)        
    }
    //Put /course/:id
    update(req,res,next){
        Courses.updateOne({_id: req.params.id}, req.body)
            .then(doc =>{
                console.log(doc);
                res.send("UPDATED!!!");
            })
            .catch(next);
    }
    //Get /course/:id/bfdelete
    beforedelete(req,res,next){
        Courses.findById(req.params.id).lean()
        .then(course =>{
           res.render("course/delete",{course});
        })
        .catch(next)        
   }
    //delete /course/:id/delete
    delete(req,res,next){
        Courses.deleteOne({_id: req.params.id})
            .then(() =>{
               res.send("Deleted!!!");
            })
            .catch(next);
            res.redirect('/me/stored/courses');
    }
  
}
module.exports=new CourseController;