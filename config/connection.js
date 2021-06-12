const mongoose = require("mongoose");
mongoose.connect(
    process.env.DB_URL, // use .env
    {useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},
    (err) => {
        if(!err) { 
            console.log("Successful connection with MongoDB Server. Yay!");
        } else {
            console.log("Error with MongoDB connectivity");
        }
});