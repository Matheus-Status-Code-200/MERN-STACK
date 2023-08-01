require('dotenv').config();
const apiUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const debugMode = process.env.DEBUG === 'true';
const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting DB.");
    console.log("dados :" + apiUser + "" + dbPassword)
    mongoose.connect(
            `mongodb+srv://${apiUser}:${dbPassword}@cluster0.mppsakt.mongodb.net/?retryWrites=true&w=majority`, {
                useUnifiedTopology: true
            })
        .then(() => console.log("CONNECTEDY MONGODB...."))
        .catch((error) => console.log("CONNECTEDY MONGODB: " + error))
};

module.exports = connectDatabase;