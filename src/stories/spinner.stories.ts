import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../libs/spinner/component";

const meta = {
  title: "Atom/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner_default: Story = {
  args: {},
};
