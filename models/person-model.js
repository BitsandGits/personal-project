// Mongoose 
const mongoose = require("mongoose");
const {Schema} = mongoose;

// Schema 
const personSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength: 1,
        trim: true
    },
    frequency: {
        type: Number,
        require: true,
        min: 1
    },
    date: {
        type: String,
        require: true,
    }, 
    notes: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true
    }
})

const Person = mongoose.model("Person", personSchema);
module.exports = Person;