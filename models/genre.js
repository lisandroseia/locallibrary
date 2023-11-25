const mongoose = require("mongoose")

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100},
})

GenreSchema.set("toObject", {virtuals: true})
GenreSchema.set("toJson", {virtuals: true})

GenreSchema.virtual("url").get(function () {
    return `/catalog/genres/${this.id}`
})

module.exports = mongoose.model("genre", GenreSchema)