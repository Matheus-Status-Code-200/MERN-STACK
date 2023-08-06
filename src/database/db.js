require('dotenv').config();

if (!process.env.DB_USER || !process.env.DB_PASSWORD) {
    console.error('DB_USER ou DB_PASSWORD não encontrados no arquivo .env.');
    process.exit(1);
}

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;


const mongoose = require("mongoose");


const connectDatabase = () => {
    console.log("Conectando ao MongoDB Atlas espere.");
    mongoose
        .connect(
            `mongodb+srv://${dbUser}:${dbPassword}@mynews.3ugwwlk.mongodb.net/?retryWrites=true&w=majority`, {
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000
            })
        .then(() => console.log("Conectado ao MongoDB Atlas...."))
        .catch((error) => console.error("ERRO DE CONCÇÃO COM O MONGODB: ", error));
};

module.exports = connectDatabase;