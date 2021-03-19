const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost/node_api",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if(!err) console.log("connection MongoDb");
        else console.log("connection error : " + err);
    }
)