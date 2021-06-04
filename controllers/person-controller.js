const Person = require("../models/person-model");

module.exports = {
    person_detail: (request, response) => {
        const { id } = request.params;
        // use findOne() method 
        Person.findOne({_id: id}, (error, foundPerson) => {
            if(error) {
                return error;
            } else {
                // pull up the original info via found id 
                response.render("pages/person", {thisPerson:foundPerson});
            }
        })
    },
    person_create: (request, response) => {
        // use Comic model 
        const newPerson = new Person({
            name: request.body.name,
            frequency: request.body.frequency,
            date: request.body.date,
            notes: request.body.notes,
            image: request.body.image
        }) 
        newPerson.save();
        response.redirect("/admin-console"); // redirect cleans url path so "..." is direct path 
    },
    person_update: (request, response) => {
        const { id } = request.params;
        // use findByIdAndUpdate method 
        Person.findByIdAndUpdate({_id: id}, {$set:{
            name: request.body.name,
            frequency: request.body.frequency,
            date: request.body.date,
            notes: request.body.notes,
            image: request.body.image
        }}, {new: true}, (error) => {
            if(error) {
                return error;
            } else {                
                response.redirect("/admin-console");
            }
        }); 
    },
    person_delete: (request, response) => {
        const { id } = request.params;
        // use deleteOne() method 
        Person.deleteOne({_id: id}, (error) => {
            if(error) {
                return error;
            } else {                
                response.redirect("/admin-console");
            }
        });
    }
};