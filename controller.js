const productmodel = require("./productmodel")

const postproduct = async (req,res) => {
    try{
    let data = req.body
    let product = await productmodel.create(data) 
    res.status(201).send(product)
    }catch(err){
        console.log(err.message)
    }
}

module.exports.postproduct = postproduct 
