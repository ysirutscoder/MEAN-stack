const mong =  require("mongoose")

const schema = mong.Schema

const positionScheme = new schema({
    name:{
        type:String,
        required:true
    },
    cost:{
        type:Number,
        default:''
    },
    category:{
        ref:'categories',
        type: schema.Types.ObjectID
    },
    user:{
        ref:'users',
        type: schema.Types.ObjectID
    }

})

module.exports = mong.model("positions",positionScheme)
