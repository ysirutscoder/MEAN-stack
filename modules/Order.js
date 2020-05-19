const mong =  require("mongoose")

const schema = mong.Schema

const orderScheme = new schema({
    date:{
        type:Date,
        default: Date.now

    },
    order:{
        type:Number,
        required:true
    },
    list:[
        {
            name:{
                type:String,
            },
            cost:{
                type:Number,
            },
            quantity:{
                type:Number,
            }
        },
    ],
    user:{
        ref:'users',
        type: schema.Types.ObjectID
    }

})

module.exports = mong.model("order",orderScheme)
