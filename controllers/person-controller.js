const Person = require("../models/person-model");

module.exports = {
    person_detail: (request, response) => {
        const { id } = request.params;
        // use findOne() method 
        Person.findOne({_id: id}, (error, foundPerson) => {
            if(error) {
                return error;
            } else {
                // pull up original info via found id 
                response.render("pages/person", {thisPerson:foundPerson});
            }
        })
    },
    person_create: (request, response) => {
        // use Person model 
        const newPerson = new Person({
            name: request.body.name,
            email: request.body.email,
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

        let newData = {
            name: request.body.name,
            email: request.body.email,
            frequency: request.body.frequency,
            date: request.body.date,
            notes: request.body.notes,
            image: request.body.image
        }

        if (request.body.date !== request.body.previousDate) {
            newData.reminderSent = false;
        }

        // use findByIdAndUpdate method 
        Person.findByIdAndUpdate(
            {_id: id},
            {$set: newData},
            {new: true},
            (error) => {
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