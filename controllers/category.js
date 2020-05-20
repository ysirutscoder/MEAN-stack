const Category = require('../modules/Category')
const errorHandler =  require('../utils/errorHandler')
const Position = require('../modules/Position')



module.exports.getAll = async (req,res)=>{
    try {
        const categories = await Category.find({_id:req.user.id})
        res.status(200).json(categories)
    } catch(e) {
    errorHandler(res,e)
    }

}

module.exports.getById = async (req,res)=>{
    try {
          const category = await Category.findById(req.params.id)
           res.status(200).json(category)
    } catch(e) {
    errorHandler(res,e)
    }

}

module.exports.removeCategory = async (req,res)=>{
    try {
           await Category.remove({_id:req.params.id})
           await Position.remove({category:req.params.id})
           res.status(200).json({
           message:"All have been deleted"
           })
    } catch(e) {
    errorHandler(res,e)
    }
    res.status(200).json({
        register:true
    })
}

module.exports.createCategory = async (req,res)=>{

    try {
        const category = await new Category({
        name:req.user.email,
        user:req.user.id,
        imageSrc:req.file ? req.file.path :''
        })
        await category.save()
        res.status(201).json(category)
    } catch(e) {
    errorHandler(res,e)
    }
}

module.exports.updateCategory = async(req,res)=>{
    const updated ={
        name:req.body.name
   }
   if(req.file){
        update.imageSrc= req.file.path
   }else{
        update.imageSrc= ''
   }
    try {
       const category = await Category.findOneAndUpdate(
       {_id:req.params.id},
       {$set:updated},// put new data from object upload $set == setState
       {new:true}
       )
       res.status(200).json(category)
    } catch(e) {
    errorHandler(res,e)
    }
}
