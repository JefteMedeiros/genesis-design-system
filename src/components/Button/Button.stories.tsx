import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Filled: Story = {
  args: {
    children: "Filled",
    variant: "filled",
  },
}

export const Outlined: Story = {
  args: {
    children: "Outlined",
    variant: "outlined",
  },
}

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
  },
}

export const DangerOutlined: Story = {
  args: {
    children: "Danger",
    variant: "danger-outlined",
  },
}
