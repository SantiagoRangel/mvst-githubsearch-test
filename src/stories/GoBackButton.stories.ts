import type { Meta, StoryObj } from "@storybook/react"

import GoBackButton from "../components/GoBackButton"
import { withRouter } from "storybook-addon-react-router-v6"

const meta = {
  title: "Components/GoBackButton",
  component: GoBackButton,
  parameters: {
    layout: "centered",
  },
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof GoBackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
