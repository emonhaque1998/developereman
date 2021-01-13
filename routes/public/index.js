const express = require("express");
const router = express.Router();
const publicHomeController = require("../../controller/public");


router.route("/")
    .get(publicHomeController.homePage);

module.exports = router;