const userModel = require("./usermodel")
const postuser = async (req,res) => {
    try{
    let data = req.body
    let user = await userModel.create(data) 
    res.status(201).send(user)
    }catch(err){
        console.log(err.message)
    }
}
const deleteuser = async (req,res) =>{
    let deleteuser = req.params.userId
    let user = await userModel.findOne({_id:deleteuser})
    if(!user){
        res.status(400).send({err:"user not found"})
    }
    const deleteduser = await userModel.findOneAndUpdate({_id:deleteuser},{isDeleted:true},{deletedAt:Date.now()},{new:true})
    res.send({msg:deleteduser})
}
module.exports.postuser = postuser
module.exports.deleteuser = deleteuser
