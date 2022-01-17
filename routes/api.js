const express=require("express")
const user_endpoint = require("./user/user");

let router=express.Router();

router.use("user", user_endpoint);

module.exports=router;