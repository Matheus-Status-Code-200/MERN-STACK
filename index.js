const express = require('express')
const app = express()
const userRoute = require("./src/routes/user.route")
const connetcDatabase = require("./src/database/db")


const port = 3000

connetcDatabase();
app.use(express.json());

app.use('/user', userRoute);

app.listen(port, () => console.log(`Servdor rodando na porta ${port}`));