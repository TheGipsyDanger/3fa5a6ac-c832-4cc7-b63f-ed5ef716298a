module.exports = plop => {
  plop.setGenerator('Component', {
    description: 'Create a new Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Button',
      },
    ],
    actions: data => {
      const path = 'src/components/';
      const pathToTemplate = './__templates__/components';
      const patternImport = /\/\/ Import component here\n/g;

      const pathToIndex = `${path}{{pascalCase name}}/index.tsx`;
      const pathToStyle = `${path}{{pascalCase name}}/{{pascalCase name}}.styles.ts`;
      const pathToTypes = `${path}{{pascalCase name}}/{{pascalCase name}}.types.ts`;
      const pathToModel = `${path}{{pascalCase name}}/{{pascalCase name}}.model.ts`;
      const pathToTest = `${path}{{pascalCase name}}/{{pascalCase name}}.test.tsx`;

      const actions = [
        {
          type: 'add',
          path: pathToIndex,
          templateFile: `${pathToTemplate}/index.js.hbs`,
        },
        {
          type: 'add',
          path: pathToStyle,
          templateFile: `${pathToTemplate}/styles.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTypes,
          templateFile: `${pathToTemplate}/data.js.hbs`,
        },
        {
          type: 'add',
          path: pathToModel,
          templateFile: `${pathToTemplate}/model.js.hbs`,
        },
        {
          type: 'add',
          path: pathToTest,
          templateFile: `${pathToTemplate}/test.js.hbs`,
        },
      ];

      return actions;
    },
  });
};
