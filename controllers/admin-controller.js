const Person = require("../models/person-model");

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            // use find() method 
            Person.find({},(error, persons) => {
                if(error){
                    return error;
                } else {
                    response.render("pages/admin", {allPersons: persons}); // pass allBooks to admin.ejs
                }
            }).sort({name:1})
        } else {
            response.redirect("/");
        }
    },
    create: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/create");
        } else {
            response.redirect("/");
        }
    },
    // PRE-Submit: find book, populate with old data 
    update: (request, response) => {
        if (request.isAuthenticated()) {
            // find id and save
            const personID = request.params.id; 
            // use findOne() method 
            Person.findOne({_id: personID}, (error, foundPerson) => {
                if(error) {
                    return error;
                } else {
                    // pull up the original info via found id 
                    response.render("pages/update", {thisPerson:foundPerson});
                }
            })
        } else {
            response.redirect("/");
        }
    }
}; 