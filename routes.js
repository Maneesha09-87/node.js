const express = require("express")
const router = express.Router()
const product = require("./controller")
const user = require("./usercontroller")
router.post("/post",product.postproduct)
router.post("/user",user.postuser)
router.delete("/delete",user.deleteuser)
module.exports = router
