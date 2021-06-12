// once there is a Atlas DB, add data to Atlas
const Person = require("../models/person-model");
// const Person = require("../data/data.js");

module.exports = {
    index: (request, response) => {
        // use find() method
        Person.find({}, (error, persons) => {
            if (error) {
                return error;
            } else {
                response.render("pages/index", {allPersons: persons}); // pass allPersons to index.ejs
            }
        }).sort({name:1})
        // response.render("pages/index", {allPersons: Person});
    }, 
    about: (request, response) => {
        response.render("pages/about");
    },
    login: (request, response) => {
        response.render("pages/login");
    }
};