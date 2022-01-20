const express=require("express")

let router=express.Router();
const userEndpoint = require('./user/user')
const brandEndpoint=require('./services/brand')
const categoriesEndpoint=require('./services/categories')


router.use('/user', userEndpoint)
router.use('/brand',brandEndpoint)
router.use('/categories',categoriesEndpoint)
module.exports=router;