import type { Meta, StoryObj } from "@storybook/react"

import UserProfilePreview from "../components/UserProfilePreview"

const meta = {
  title: "Components/UserProfilePreview",
  component: UserProfilePreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserProfilePreview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    userData: {
      avatarUrl:
        "https://avatars.githubusercontent.com/u/36021620?u=12adec2fc67031bd16bc3fe4c2a25fd6f591fb01&v=4",
      bio: "Software Developer with interest for 3d ",
      followers: { totalCount: 4 },
      following: { totalCount: 7 },
      id: "MDQ6VXNlcjM2MDIxNjIw",
      login: "SantiagoRangel",
      name: "Santiago Rangel",
      organizations: {
        nodes: [
          {
            avatarUrl: "https://avatars.githubusercontent.com/u/132991085?v=4",
            name: "UniversalPlastic-io",
          },
        ],
      },
      repositories: {
        nodes: [
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
    },
  },
}
