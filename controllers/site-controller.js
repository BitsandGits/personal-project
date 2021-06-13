// once there is a Atlas DB, add data to Atlas
const Person = require("../models/person-model");
const User = require("../models/user-model");
const passport = require("passport");

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
    register_post: (request, response) => {
        console.log(request.body);
        // User.register creates the object
        User.register({username: request.body.username}, request.body.password, (error, user) => {
            if (error){
                console.log(error);
                response.redirect("/register");
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect("/");
                });
            }
        });
    },
    login: (request, response) => {
        response.render("pages/login");
    },
    login_post: (request, response) => {
        const user = new User({
            username: request.body.username,
            password: request.body.password
        });
        request.login(user, (error) => {
            if(error) {
                console.log(error);
                response.redirect("/");
            } else {
                passport.authenticate("local")(request, response, () => {
                    response.redirect("/admin-console");
                });
            }
        });
    },
    logout: (request, response) => {
        request.logout();
        response.redirect("/login");
    }
};