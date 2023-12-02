const mongoose = require("mongoose")
const moment = require("moment")
const Schema = mongoose.Schema

const AuthorSchema = new Schema({
    first_name: { type: String, required: true, maxLength: 100},
    family_name: { type: String, required: true, maxLength: 100 },
    date_of_birth: { type: Date },
    date_of_death: { type: Date },
})

AuthorSchema.set("toObject", {virtuals: true})
AuthorSchema.set("toJson", {virtuals: true})


AuthorSchema.virtual("name").get(function () {
    let fullname = ""
    if (this.first_name && this.family_name){
        fullname = `${this.family_name}, ${this.first_name}`
    }

    return fullname
} )

AuthorSchema.virtual("birth_formated").get(function () {
    return moment(this.date_of_birth).format("YYYY-MM-DD")
})

AuthorSchema.virtual("death_formated").get(function () {
    return moment(this.date_of_death).format("YYYY-MM-DD")
})

AuthorSchema.virtual("url").get( function () {
    return `/catalog/author/${this.id}`
} )

module.exports = mongoose.model("Author", AuthorSchema)