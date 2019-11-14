var express = require("express");
var booksRouter = express.Router();
function router(nav) {

    var books = [
        {
            image: "img1.jpg",
            title: "I will never tell",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
        {
            image: "img2.jpg",
            title: "book2",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
        {
            image: "img3.jpg",
            title: "book3",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
        {
            image: "img4.jpg",
            title: "book4",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
        {
            image: "img5.jpg",
            title: "book5",
            genre: "historical fiction",
            author: "lev nicolaveyich"
        },
    ]

    booksRouter.route('/')
        .get((req, res) => {

            res.render(
                'books',
                {
                    nav, title: 'Books', books
                }
            )
        })

    booksRouter.route('/add')
        .get((req, res) => {
            res.render(
                'addbooks.ejs', {
                    nav, title: 'Upload your books', books
                }
            )
        })

        booksRouter.route('/save')
        .post((req,res)=>{
            //res.send("form submitted")
            console.log(req);
        })


    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'book',
                {
                    nav, title: 'book', book: books[id]
                }
            )
        })

       


    return booksRouter;
}
module.exports = router