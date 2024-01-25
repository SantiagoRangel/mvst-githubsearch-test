import type { Preview } from "@storybook/react"
import "tailwindcss/tailwind.css"
import "../src/index.css"
// import "../src/main.tsx"
// import "@fontawesome/fontawesome-free/css/all.css"
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
