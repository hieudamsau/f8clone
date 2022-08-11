const express= require('express');
const app = express();
const path = require('path');
const morgan = require("morgan");
const { engine } = require ('express-handlebars')
const db = require('./config/db');
const methodOverride=require('method-override');

const route =require('./route');
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended : true}));
app.use(express.json());
//connect DB:
db.connect();
//HTTP logger
app.use(morgan("combined"));
// template engine 
app.engine('handlebars', engine({
        helpers :  {
            sum : (a,b) => a+b,
        }
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'views'));

app.use(methodOverride('_method'));


route(app);

app.listen(3000,()=>{
    console.log("dang lang nghe tai port 3000");
});