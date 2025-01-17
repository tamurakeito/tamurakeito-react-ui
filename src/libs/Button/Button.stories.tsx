import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const button: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    btnColor: {
      options: ["strawberry", "pineapple", "soda"],
      control: { type: "radio" },
    },
    clickEvent: {
      action: "clicked",
    },
  },
};

export default button;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    btnColor: "strawberry",
    label: "Example Button",
  },
};
