const express = require("express");

const adminOneController = require('../../controllers/admin/adminOneController')

const router = express.Router();

router.get('/',adminOneController.testController);

module.exports = router;