// require Express Router 
const express = require("express");
const router = express.Router(); 

// require controller 
const siteController = require("../controllers/site-controller"); 

// routes 
// render = get request 
router.route("/")
    .get(siteController.index);
router.route("/about")
    .get(siteController.about);
router.route("/register")
    .post(siteController.register_post);
router.route("/login")
    .get(siteController.login)
    .post(siteController.login_post);
router.route("/logout")
    .get(siteController.logout);

module.exports = router;