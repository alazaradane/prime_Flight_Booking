const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user-controller');

router.post('/signup', UserController.create);
router.post('/signIn', UserController.signIn);

module.exports = router;