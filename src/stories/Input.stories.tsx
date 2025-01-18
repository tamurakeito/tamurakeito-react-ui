import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../libs/Input/component";
import React, { useState } from "react";

const meta = {
  title: "Atom/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const InputWithState = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      placeholder={"テキストを入力"}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};

export const Normal: Story = {
  args: {
    value: "",
    onChange: undefined,
  },
  render: () => <InputWithState />,
};
