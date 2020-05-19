const mong =  require("mongoose")

const schema = mong.Schema

const categoryScheme = new schema({
    name:{
        type:String,
        required:true
    },
    imgSrc:{
        type:String,
        default:''
    },
    user:{
        ref:'users',
        type: schema.Types.ObjectID
    }

})

module.exports = mong.model("categories",categoryScheme)
