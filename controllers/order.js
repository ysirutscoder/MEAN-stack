const Order = require('../modules/Order')
const errorHandler = require('../utils/errorHandler')


module.exports.getOrder = async (req, res) => {
    try {
        const order = await new Order()

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.createOrder = async (req, res) => {
    try {
        const order = await new Order({

        })
    } catch (e) {
        errorHandler(res, e)
    }
}

