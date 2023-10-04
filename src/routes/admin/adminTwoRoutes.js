const express = require("express");

const adminOneController = require('../../controllers/admin/adminOneController')

const middleware = require('../../middlewares/tokenVerification')

const router = express.Router();

router.get('/',middleware.tokenTest,adminOneController.testController);

module.exports = router;