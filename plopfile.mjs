export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator("feature", {
    description: "Generates a new feature folder with its inner folders",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Type the name of the feature to be added:",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/features/{{dashCase name}}",
        templateFiles: "templates/new-feature/**/*",
        base: "templates/new-feature",
        globOptions: { dot: true },
      },
    ],
  });
}
