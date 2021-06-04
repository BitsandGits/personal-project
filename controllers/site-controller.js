const Person = require("../models/person-model");

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
    }, 
    about: (request, response) => {
        response.render("pages/about");
    },
    login: (request, response) => {
        response.render("pages/login");
    }
};