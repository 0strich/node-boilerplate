const util = require("util");
const exec = util.promisify(require("child_process").exec);
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

const projects = [
  { project: "test", projectName: "test-node" },
  { project: "test", projectName: "test-react" },
  { project: "", projectName: "" },
];

// push test
const deployTest = async (req, res) => {
  try {
    const body = req.body;
    const projectName = body?.project?.name;

    const project = projects.find((el) => el?.projectName === projectName);

    if (project) {
      const { stdout, stderr } = await exec(`deploy -n ${projectName}`);
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    } else {
      throw "error comes..";
    }

    return cwr.createWebResp(res, 200, body);
  } catch (error) {
    return cwr.errorWebResp(res, 403, errors.E00009, error.message);
  }
};

module.exports = {
  deployTest,
};
