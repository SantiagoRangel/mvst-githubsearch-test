import type { Meta, StoryObj } from "@storybook/react"

import FilterInput from "../components/FilterInput"

const meta = {
  title: "Components/FilterInput",
  component: FilterInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FilterInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
