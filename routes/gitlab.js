const express = require("express");
const router = express.Router();
// middleware
const middleware = require("middlewares/users");
// validation
const validatorArrays = require("validators/users/validatorArrays");
const validatorFn = require("validators/users/validatorFn");
// controllers
const controller = require("controllers/gitlab");
// utils
const jwt = require("utils/jwt");

// webhook
router.post("/webhook/deploy", controller.webhookDeploy);

module.exports = router;
