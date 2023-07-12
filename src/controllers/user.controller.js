const create = (req, res) => {
    const { name, userName, email, passoword, avatar, backgroud } = req.body;
    if (!name || !userName || !email || !passoword || !avatar || !backgroud) {
        res.status(400).send({
            message: "Some field is incorrect!"
        })
    }
    res.status(201).send({
        message: "Successfully registered user!",
        user: {
            name,
            userName,
            email,
            avatar,
            backgroud
        },
    })
}

module.exports = { create }