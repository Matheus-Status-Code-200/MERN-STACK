require('dotenv').config();
const apiUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const debugMode = process.env.DEBUG === 'true';
const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting DB.");
    mongoose.connect(
            `mongodb+srv://${apiUser}:${dbPassword}@cluster0.mppsakt.mongodb.net/?retryWrites=true&w=majority`, {
                useUnifiedTopology: true
            })
        .then(() => console.log('\x1b[32m', "CONNECTEDY MONGODB ATLAS....", '\x1b[0m'))
        .catch((error) => console.log("ERROR CONNECTEDY MONGODB: " + error))
};

module.exports = connectDatabase;