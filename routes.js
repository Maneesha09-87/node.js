const express = require("express")
const router = express.Router()
const product = require("./controller")
router.post("/post",product.postproduct)

module.exports = router
