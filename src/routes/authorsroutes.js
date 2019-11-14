var express=require("express");
var authorsRouter=express.Router();

function router(nav){

var authors=[
        {
         image:'img1.jpg',
          name:"lev nicolaveyich",
          country:"russian"
        }, {
            image:'img2.jpg',
          name:"lev nicolaveyich",
          country:"russian"
        }, {
            image:'img3.jpg',
          name:"lev nicolaveyich",
          country:"russian"
        }, {
            image:'img4.jpg',
          name:"lev nicolaveyich",
          country:"russian"
        }
    ]
    
    
    authorsRouter.route('/')
    .get((req,res)=>{
        res.render(
            "authors.ejs",{
                nav,title:"Authors",authors
            }
        )
    
    })
    
    authorsRouter.route('/:id')
     .get((req,res)=>{
         res.render(
             'author',
             {
                 nav,title:'author',book:books[i]
             }
         )
     })
     return authorsRouter;

}
module.exports=router