const mongoose = require("mongoose")
const moment = require('moment');
const Schema = mongoose.Schema

const BookInstanceSchema = new Schema({
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ["Available", "Maintenance", "Loaned", "Reserved"], default: "Maintenance" },
    due_back: { type: Date, default: Date.now}
})

BookInstanceSchema.set("toObject", {virtuals: true})
BookInstanceSchema.set("toJson", {virtuals: true})

BookInstanceSchema.virtual("url").get(function () {
    return `/catalog/bookinstance/${this.id}`
})

BookInstanceSchema.virtual("due_back_formated").get(function () {
    return moment(this.due_back).format("YYYY-MM-DD")
})

module.exports = mongoose.model("BookInstanceSchema", BookInstanceSchema)