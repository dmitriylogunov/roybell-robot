# Coding assessment

Create a Javascript application in which you can simulate controlling a robot. The robot should be placed on a 5x5 grid. Supply controls that let you move the robot forwards in the direction it is facing, and rotate the robot in place to face any cardinal direction. Use any Javascript framework you’re comfortable with, as long as it runs in modern web browsers (we’re not looking for backwards compatibility in this test). Take a look around bellroy.com and use what you see to give your application a Bellroy “look”.

NB: In order to give an application a "Bellroy" look, a bellroy.css file from bellroy.com.au is included, and some Tailwind CSS styles are reused, but not a lot.

NB2: There is no support for the mobile devices

NB3: This app would benefit from a few unit tests. Vitest and Jest are installed, and npm test script is set up, but there are no tests yet.

# Available scripts

`npm run dev`

`npm run build`

`npm run test`

`npm run test:ui`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
