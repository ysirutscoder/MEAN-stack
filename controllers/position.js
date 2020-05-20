const Position = require("../modules/Position")
const errorHandler = require("../utils/errorHandler")

module.exports.positionGet = async (req, res) => {
    try {
        const positions = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.positionCreate = async (req, res) => {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save()
        res.status(201).json(position)
    } catch (e) {
        errorHandler(res, e)
    }


}

module.exports.positionUpdate = async (req, res) => {
    try {
        const position = await new Position.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(position)
    } catch (e) {
        errorHandler(res, e)
    }


}
module.exports.positionDelete = async (req, res) => {
    try {
        await Position.remove({_id: req.params.id})
        res.status(200).json({
            message: "Position was successfully removed"
        })
    } catch (e) {
        errorHandler(res, e)
    }


}
