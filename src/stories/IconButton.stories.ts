import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    alt: { control: "text", description: "이미지 alt 속성" },
    onClick: { description: "버튼 클릭 이벤트", control: false }
  },
  args: { iconPath: "", alt: "icon", onClick: fn() }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "icons/ic-delete-dark.svg"
  }
};
