const express = require ('express');
let router = express.Router();

let brandController = require('../../controllers/brandController')

router.get('/',brandController.fetchBrand);
router.get('/:id',brandController.singleFetchBrand);

module.exports=router;