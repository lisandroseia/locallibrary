const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.ObjectId, ref: 'Genre' }],
})

BookSchema.set("toObject", {virtuals: true})
BookSchema.set("toJson", {virtuals: true})


BookSchema.virtual("url").get( function () {
    return `/catalog/book/${this.id}`
})

module.exports = mongoose.model("Book", BookSchema)