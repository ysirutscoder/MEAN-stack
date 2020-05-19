module.exports = (res,e)=>{
    res.status(500).json({
      success:false,
      message:e.message ? e.message : "You application meet unexpectable error"
    })
}
