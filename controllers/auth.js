const User = require('../modules/User')
const bcrypt = require('bcryptjs')
const tokenGen = require('jsonwebtoken')
const keys = require('../config/keys')
const errorHandler = require("../utils/errorHandler")

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})
    if (!candidate) {
        res.status(404).json({
            message: "User not found.Try again"
        })
    } else {
        const passResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passResult) {
            const token = tokenGen.sign({
                email: candidate.email,
                userId: candidate._id
            }, keys.tokenGen, {expiresIn: 3600})
            res.status(200).json({
                token: `Bearer ${token}`,
            })
        } else {
            res.status(401).json({
                message: "Wrong credentials."
            })
        }
    }
}


module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        res.status(409).json({
            message: "User alredy existed.Try using another email."
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } catch (erorr) {
            errorHandler(res, erorr);
        }

    }

}

