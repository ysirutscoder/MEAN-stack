module.exports.getAll = (req,res)=>{
    res.status(200).json({
        message:"Categories"
    })
}

module.exports.getById = (req,res)=>{
    res.status(200).json({
        register:true
    })
}

module.exports.removeCategory = (req,res)=>{
    res.status(200).json({
        register:true
    })
}

module.exports.createCategory = (req,res)=>{
    res.status(200).json({
        register:true,
        message:"hello world"
    })
}

module.exports.updateCategory = (req,res)=>{
    res.status(200).json({
        register:true
    })
}
