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
const { gitlabWebhookProjects } = require("utils/constants");
const payload = require("utils/payload");
// errors
const { errors } = require("utils/errors/index");

// webhook deploy
const webhookDeploy = async (req, res) => {
  try {
    const body = req.body;
    const eventProjectName = body?.project?.name;
    console.log("eventProjectName: ", eventProjectName);

    const findProject = gitlabWebhookProjects.find(
      (el) => el?.projectName === eventProjectName
    );

    const { host, project, projectName } = findProject;
    console.log("project: ", project);

    if (findProject) {
      const { stdout, stderr } = await exec(
        `deploy -n ${host} ${project} ${projectName}`
      );
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
  webhookDeploy,
};
