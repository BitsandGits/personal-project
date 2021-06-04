// require Express Router 
const express = require("express");
const router = express.Router(); 

// require routes 
const adminRoutes = require("./admin-routes");
const personRoutes = require("./person-routes");
const siteRoutes = require("./site-routes");

// routes: router.use instead of router.route 
// use = splitting where the routing is going bc there is no get/post/etc actions 
router.use("/", siteRoutes);
router.use("/persons", personRoutes); 
router.use("/admin-console", adminRoutes); 
 
module.exports = router;