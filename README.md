# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
}
```

Use a more generic component for navigation where you could enter color, size, font weight, and navigateTo url
Instead of having two separate inputs I coould have one generic input with arguments to make it customizable
Add fontawesome as package so it can be imported on storybook and visualized instead of using cdn option
Another improvement could be deconstructing props for components so storybook can interact with the props the way they are supposed to

VITE_GITHUB_TOKEN=<API TOKEN>
VITE_API_URL=https://api.github.com/graphql
