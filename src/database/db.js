const mongoose = require("mongoose");
const connectDatabase = () => {
    console.log("Wait connecting DB.");
    mongoose.connect(
            "mongodb+srv://testeselenium600:newsmongo@cluster0.mppsakt.mongodb.net/?retryWrites=true&w=majority", {
                useUnifiedTopology: true
            })
        .then(() => console.log("CONNECTEDY MONGODB...."))
        .catch((error) => console.log("CONNECTEDY MONGODB: " + error))
};

module.exports = connectDatabase;