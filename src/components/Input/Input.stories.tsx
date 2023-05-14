import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: "Input",
    searchIcon: false,
    id: "input",
  },
}

export const Label: Story = {
  args: {
    placeholder: "Input",
    label: "Label",
    id: "input",
  },
}

export const SearchIcon: Story = {
  args: {
    placeholder: "Input",
    searchIcon: true,
    id: "input",
  },
}
