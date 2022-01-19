const express = require ('express');
let router = express.Router();
let userController = require('../../controllers/userController')

router.get('/', userController.get);

router.post('/login', userController.login);
router.post('/register',userController.register);

module.exports = router;