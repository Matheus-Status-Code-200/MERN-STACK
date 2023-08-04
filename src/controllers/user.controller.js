const userService = require("../services/user.service");
const create = async(req, res) => {
    const { name, userName, email, passoword, avatar, backgroud } = req.body;
    if (!name || !userName || !email || !passoword || !avatar || !backgroud) {
        res.status(400).send({
            message: "Some field is incorrect!"
        })
    }
    const user = await userService.create(req.body)

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

    try {
        let users = await userService.findAllService()
        return res.json({ "users": users })
    } catch (err) {
        console.log("Error", err);
        throw new Error('Something went wrong')
    };
}
module.exports = { create, findAll }