# Github repositories searcher

This is a test project made for MVST. In this site a user can look for a Github user and take a look at their repositories. A filtering features is enabled for these. Live url: [https://mvst-githubsearch-test.vercel.app/](https://mvst-githubsearch-test.vercel.app/)

## How to run

To run this project make sure you cloned the repository and then run the following commands from the root folder. Before running the commands and a .env file containing the Github graphql api endpoint as well as a Github authentication token. Please use pnpm as the package manager.

```console
VITE_GITHUB_TOKEN=<API TOKEN>
VITE_API_URL=https://api.github.com/graphql
```

```console
pnpm install
```

```console
pnpm dev
```

Future Improvements

- Use a more generic component for navigation button where you could enter color, label, size, font weight, and navigateTo url
- Instead of having two separate inputs, one generic input with arguments could be implemented to make it customizable and reusable on the app
- Add fontawesome as a package so it can be imported on storybook and visualized instead of using cdn option
- Another improvement could be deconstructing props for components so storybook can interact with the props the way they are supposed to
- Re do the programming language filter to have a custom ui not using the plain html select element adding a proper cancel for the filter
