import { Meta, StoryObj } from "@storybook/react/*";
import { Icon, iconTypes } from "libs/Icon/component";

const meta = {
  title: "Atom/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon_shop: Story = {
  args: {
    size: 32,
    type: iconTypes.shop,
  },
};
export const Icon_loading: Story = {
  args: {
    size: 32,
    type: iconTypes.loading,
  },
};
export const Icon_expand: Story = {
  args: {
    size: 32,
    type: iconTypes.expand,
  },
};
export const Icon_chevronDownSolid: Story = {
  args: {
    size: 32,
    type: iconTypes.chevronDownSolid,
  },
};
export const Icon_enterprise: Story = {
  args: {
    size: 32,
    type: iconTypes.enterprise,
  },
};
export const Icon_brand: Story = {
  args: {
    size: 32,
    type: iconTypes.brand,
  },
};
export const Icon_menu: Story = {
  args: {
    size: 32,
    type: iconTypes.menu,
  },
};
export const Icon_drag: Story = {
  args: {
    size: 32,
    type: iconTypes.drag,
  },
};
export const Icon_surprised: Story = {
  args: {
    size: 32,
    type: iconTypes.surprised,
  },
};
export const Icon_eatin: Story = {
  args: {
    size: 32,
    type: iconTypes.eatin,
  },
};
export const Icon_takeout: Story = {
  args: {
    size: 32,
    type: iconTypes.takeout,
  },
};
export const Icon_payment: Story = {
  args: {
    size: 32,
    type: iconTypes.payment,
  },
};
export const Icon_table: Story = {
  args: {
    size: 32,
    type: iconTypes.table,
  },
};
export const Icon_qr: Story = {
  args: {
    size: 32,
    type: iconTypes.qr,
  },
};
export const Icon_locker: Story = {
  args: {
    size: 32,
    type: iconTypes.locker,
  },
};
export const Icon_pos: Story = {
  args: {
    size: 32,
    type: iconTypes.pos,
  },
};
export const Icon_line: Story = {
  args: {
    size: 32,
    type: iconTypes.line,
  },
};
export const Icon_plan: Story = {
  args: {
    size: 32,
    type: iconTypes.plan,
  },
};
