class NewsController {
    index(req,res) {
        res.render("news");
        }
    show(req,res){
        res.send('hello')
    }
}
module.exports=new NewsController;