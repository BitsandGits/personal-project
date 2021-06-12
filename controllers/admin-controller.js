const Person = require("../models/person-model");

module.exports = {
    admin: (request, response) => {
        // use find() method 
        Person.find({},(error, persons) => {
            if(error){
                return error;
            } else {
                response.render("pages/admin", {allPersons: persons}); // pass allBooks to admin.ejs
            }
        }).sort({name:1})
    },
    create: (request, response) => {
        response.render("pages/create");
    },
    // PRE-Submit: find book, populate with old data 
    update: (request, response) => {
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
    }
}; 