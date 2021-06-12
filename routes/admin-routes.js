// require Express Router 
const express = require("express");
const router = express.Router(); 

// require controller 
const adminController = require("../controllers/admin-controller"); 

// routes
router.route("/")
    .get(adminController.admin);
router.route("/create-person")
    .get(adminController.create);
router.route("/update-person/:id")
    .get(adminController.update); 

module.exports = router;