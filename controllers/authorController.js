const Author = require("../models/author")
const Book = require("../models/book")

const asyncHandler = require("express-async-handler")

exports.author_list = asyncHandler( async(req, res, next) => {

    const allAuthors = await Author.find().sort({family_name: 1}).exec()

    res.render("authors_list", { title: "Author list", authors_list: allAuthors })
} )

exports.author_detail = asyncHandler(async (req, res, next) =>{

    const [ author, allBooksByAuthor] = await Promise.all([
        Author.findById(req.params.id).exec(),
        Book.find({author: req.params.id}, "title summary").exec()
    ])

    if (author === null) {
        // No results.
        const err = new Error("Author not found");
        err.status = 404;
        return next(err);
      }
    
      res.render("author_detail", {
        title: "Author Detail",
        author: author,
        author_books: allBooksByAuthor,
      });
} )

exports.author_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author create get")
})

exports.author_create_post = asyncHandler( async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author create post")
})

exports.author_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author delete get")
})

exports.author_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author delete post")
})

exports.author_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author update get")
})

exports.author_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: author update post")
})