const { model } = require('mongoose');
const courses = require('../Courses');
 //    courses.create({
    //     name : "Lập Trình JavaScript Nâng Cao",
    //     decription : "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ..." ,
    //     image : "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
    //    }).then((doc)=>{
    //         console.log(doc);
    //    });
    courses.updateOne({_id : '62e64c08369ec811657499a0'},{src : "https://www.youtube.com/embed/LnTPJcUQdNU"}).then(value =>{
            console.log(value);
        })