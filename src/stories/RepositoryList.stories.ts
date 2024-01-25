import type { Meta, StoryObj } from "@storybook/react"

import RepositoryList from "../components/RepositoryList"

const meta = {
  title: "Components/RepositoryList",
  component: RepositoryList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RepositoryList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    repositories: [
      {
        description: "Basic REST/JDBC server based on RedHat Wildfly",
        forkCount: 0,
        id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
        isPrivate: false,
        name: "ELREAL",
        primaryLanguage: { name: "Java", color: "#b07219" },
        updatedAt: "2019-10-10T21:29:38Z",
        url: "https://github.com/SantiagoRangel/ELREAL",
      },
      {
        forkCount: 0,
        id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
        isPrivate: false,
        name: "ELREAL",
        primaryLanguage: { name: "Java", color: "#b07219" },
        updatedAt: "2019-10-10T21:29:38Z",
        url: "https://github.com/SantiagoRangel/ELREAL",
      },
      {
        description: "Basic REST/JDBC server based on RedHat Wildfly",
        forkCount: 0,
        id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
        isPrivate: false,
        name: "ELREAL",
        updatedAt: "2019-10-10T21:29:38Z",
        url: "https://github.com/SantiagoRangel/ELREAL",
      },
      {
        description: "Basic REST/JDBC server based on RedHat Wildfly",
        forkCount: 0,
        id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
        isPrivate: false,
        name: "ELREAL",
        primaryLanguage: { name: "Java", color: "#b07219" },
        updatedAt: "2019-10-10T21:29:38Z",
        url: "https://github.com/SantiagoRangel/ELREAL",
      },
    ],
  },
}
