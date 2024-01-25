import type { Meta, StoryObj } from "@storybook/react"

import RepositoryPreview from "../components/RepositoryPreview"

const meta = {
  title: "Components/RepositoryPreview",
  component: RepositoryPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RepositoryPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    repository: {
      description: "Basic REST/JDBC server based on RedHat Wildfly",
      forkCount: 0,
      id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
      isPrivate: false,
      name: "ELREAL",
      primaryLanguage: { name: "Java", color: "#b07219" },
      updatedAt: "2019-10-10T21:29:38Z",
      url: "https://github.com/SantiagoRangel/ELREAL",
    },
  },
}
export const NoDescription: Story = {
  args: {
    repository: {
      forkCount: 0,
      id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
      isPrivate: false,
      name: "ELREAL",
      primaryLanguage: { name: "Java", color: "#b07219" },
      updatedAt: "2019-10-10T21:29:38Z",
      url: "https://github.com/SantiagoRangel/ELREAL",
    },
  },
}

export const NoPrimaryLanguage: Story = {
  args: {
    repository: {
      description: "Basic REST/JDBC server based on RedHat Wildfly",
      forkCount: 0,
      id: "MDEwOlJlcG9zaXRvcnkxMjYwOTg5NzE=",
      isPrivate: false,
      name: "ELREAL",
      updatedAt: "2019-10-10T21:29:38Z",
      url: "https://github.com/SantiagoRangel/ELREAL",
    },
  },
}
