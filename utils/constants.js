const emptyTypes = [undefined, null, NaN, false, {}, []];
const emptyTypeString = ["undefined", "null", "NaN", "false", "{}", "[]", ""];
const emptyElements = [...emptyTypes, ...emptyTypeString];

const gitlabWebhookProjects = [
  { host: "sm", project: "saltmine", projectName: "homepage" },
  { host: "sm", project: "saltmine", projectName: "saltmine-admin" },
  { host: "sm", project: "salti", projectName: "salti-admin" },
  { host: "sm", project: "salti", projectName: "salti-node" },
  { host: "sm", project: "salti", projectName: "salti-partners" },
  { host: "sm", project: "salti", projectName: "salti-service-landing" },
  { host: "sm", project: "salti", projectName: "salti-smti" },
  { host: "vendor", project: "vision", projectName: "vision-node" },
  { host: "vendor", project: "vision", projectName: "vision-react" },
  { host: "vendor", project: "obigshare", projectName: "obigshare-api" },
  { host: "vendor", project: "obigshare", projectName: "obigshare-node" },
  { host: "vendor", project: "ilharu", projectName: "ilharu-admin" },
  { host: "vendor", project: "ilharu", projectName: "ilharu-node" },
  { host: "vendor", project: "ilharu", projectName: "ilharu-react" },
  { host: "vendor", project: "ilharu", projectName: "ilharu-unity-node" },
  { host: "vendor", project: "dable", projectName: "smti-dable-node" },
  { host: "vendor", project: "dable", projectName: "smti-dable-react" },
  { host: "vendor", project: "test", projectName: "test-node" },
  { host: "vendor", project: "test", projectName: "test-react" },
];

module.exports = {
  gitlabWebhookProjects,
  emptyElements,
};
