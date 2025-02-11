import type { Meta, StoryObj } from "@storybook/react";
import {
  CircleButton,
  circleButtonIcons,
  circleButtonVariants,
} from "../libs/circle-button/component";

const meta = {
  title: "Atom/CircleButton",
  component: CircleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircleButton_edit: Story = {
  args: {
    icon: circleButtonIcons.edit,
  },
};

export const CircleButton_edit_white: Story = {
  args: {
    icon: circleButtonIcons.edit,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_cancel: Story = {
  args: {
    icon: circleButtonIcons.cancel,
  },
};

export const CircleButton_cancel_white: Story = {
  args: {
    icon: circleButtonIcons.cancel,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_chevronLeft: Story = {
  args: {
    icon: circleButtonIcons.chevronLeft,
  },
};

export const CircleButton_chevronLeft_white: Story = {
  args: {
    icon: circleButtonIcons.chevronLeft,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_chevronRight: Story = {
  args: {
    icon: circleButtonIcons.chevronRight,
  },
};

export const CircleButton_chevronRight_white: Story = {
  args: {
    icon: circleButtonIcons.chevronRight,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_moreH: Story = {
  args: {
    icon: circleButtonIcons.moreH,
  },
};

export const CircleButton_moreH_white: Story = {
  args: {
    icon: circleButtonIcons.moreH,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_moreV: Story = {
  args: {
    icon: circleButtonIcons.moreV,
  },
};

export const CircleButton_moreV_white: Story = {
  args: {
    icon: circleButtonIcons.moreV,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_bell: Story = {
  args: {
    icon: circleButtonIcons.bell,
  },
};

export const CircleButton_bell_white: Story = {
  args: {
    icon: circleButtonIcons.bell,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_copy: Story = {
  args: {
    icon: circleButtonIcons.copy,
  },
};

export const CircleButton_copy_white: Story = {
  args: {
    icon: circleButtonIcons.copy,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_delete: Story = {
  args: {
    icon: circleButtonIcons.delete,
  },
};

export const CircleButton_delete_white: Story = {
  args: {
    icon: circleButtonIcons.delete,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_qr: Story = {
  args: {
    icon: circleButtonIcons.qr,
  },
};

export const CircleButton_qr_white: Story = {
  args: {
    icon: circleButtonIcons.qr,
    variant: circleButtonVariants.white,
  },
};

export const CircleButton_download: Story = {
  args: {
    icon: circleButtonIcons.download,
  },
};

export const CircleButton_download_white: Story = {
  args: {
    icon: circleButtonIcons.download,
    variant: circleButtonVariants.white,
  },
};
