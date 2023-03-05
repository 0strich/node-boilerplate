// models
const Auths = require("models/auths/index");
const Admins = require("models/users/index");
// services
const service = require("services/index");
// utils
const jwt = require("utils/jwt");
const cwr = require("utils/createWebResp");
const payload = require("utils/payload");
// errors
const { errors } = require("utils/errors/index");

// push test
const deployTest = async (req, res) => {
  try {
    const body = req.body;
    console.log("body: ", body);

    return cwr.createWebResp(res, 200, body);
  } catch (error) {
    return cwr.errorWebResp(res, 403, errors.E00009, error.message);
  }
};

module.exports = {
  deployTest,
};
