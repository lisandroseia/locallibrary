const mongoose = require("mongoose")

const Schema = mongoose.Schema

const GenreSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100},
})

GenreSchema.virtual("url").get(() => {
    return `/catalog/genres/${this.id}`
})

module.exports = mongoose.model("genre", GenreSchema)