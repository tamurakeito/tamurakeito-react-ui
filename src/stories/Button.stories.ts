import type { Meta, StoryObj } from "@storybook/react";
import { Button, buttonSizes, buttonVariants } from "../libs/Button/component";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button_primary_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.sm,
  },
};

export const Button_primary_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.sm,
    disabled: true,
  },
};

export const Button_primary_md: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.md,
  },
};

export const Button_primary_md_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.md,
    disabled: true,
  },
};

export const Button_primary_xs: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.xs,
  },
};

export const Button_primary_xs_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primary,
    size: buttonSizes.xs,
    disabled: true,
  },
};

export const Button_white_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.white,
    size: buttonSizes.sm,
  },
};

export const Button_white_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.white,
    size: buttonSizes.sm,
    disabled: true,
  },
};

export const Button_light_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.light,
    size: buttonSizes.sm,
  },
};

export const Button_light_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.light,
    size: buttonSizes.sm,
    disabled: true,
  },
};

export const Button_danger_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.danger,
    size: buttonSizes.sm,
  },
};

export const Button_danger_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.danger,
    size: buttonSizes.sm,
    disabled: true,
  },
};

export const Button_outline_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.outline,
    size: buttonSizes.sm,
  },
};

export const Button_outline_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.outline,
    size: buttonSizes.sm,
    disabled: true,
  },
};

export const Button_primaryLight_sm: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primaryLight,
    size: buttonSizes.sm,
  },
};

export const Button_primaryLight_sm_disabled: Story = {
  args: {
    children: "サインイン",
    variant: buttonVariants.primaryLight,
    size: buttonSizes.sm,
    disabled: true,
  },
};
