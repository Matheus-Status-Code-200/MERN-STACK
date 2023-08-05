const userService = require("../services/user.service");

const create = async(req, res) => {
    const { name, userName, email, passoword, avatar, backgroud } = req.body;
    if (!name || !userName || !email || !passoword || !avatar || !backgroud) {
        res.status(400).send({
            message: "Some field is incorrect!"
        })
    }
    const user = await userService.createService(req.body)

    if (!user) {
        return res.status(400).send({
            message: "Error ao criar o usuário!"
        })
    }
    res.status(201).send({
        message: "Successfully registered user!",
        user: {
            id: user._id,
            name,
            userName,
            email,
            avatar,
            backgroud
        },
    })
}

const findAll = async(req, res) => {
    const users = await userService.findAllService();
    if (users.length === 0) {
        return res.status(503).send({ "message": "No Users found" })
    }
    res.send({ users })
}
module.exports = { create, findAll }