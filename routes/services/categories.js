const express = require ('express');
let router = express.Router();

let categoriesController = require('../../controllers/categoriesController')

router.get('/',categoriesController.fetchCategories);
router.get('/:id',categoriesController.singleFetchCategory);

module.exports=router;