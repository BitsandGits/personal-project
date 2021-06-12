// require Express Router 
const express = require("express");
const router = express.Router(); 

// require controller 
const personController = require("../controllers/person-controller"); 

// routes
// new goes before id so it doesn't get mistaken as an id 
router.route("/")
    .post(personController.person_create); 

// :id is a query param thus put it last 
router.route("/:id")
    .get(personController.person_detail)
    .put(personController.person_update)
    .delete(personController.person_delete);

module.exports = router;