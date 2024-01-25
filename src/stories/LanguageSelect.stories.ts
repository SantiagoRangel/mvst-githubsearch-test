import type { Meta, StoryObj } from "@storybook/react"

import LanguageSelect from "../components/LanguageSelect"

const meta = {
  title: "Components/LanguageSelect",
  component: LanguageSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    languages: ["JavaScript", "Python", "C++"],
  },
}
