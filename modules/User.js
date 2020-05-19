const mong =  require("mongoose")

const schema = mong.Schema

const usersScheme = new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
})

module.exports = mong.model("user",usersScheme)
