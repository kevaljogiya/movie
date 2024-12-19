const mongoose = require("mongoose");

const schema = mongoose.Schema({
    moviename: { 
        type: String, 
        required: true 
    },
    movietitle: { 
        type: String, 
        required: true 
    },
    releasedate: { 
        type: String, 
        required: true 
    },
    price: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
   
});

const admin = mongoose.model("data",schema);
module.exports = admin;