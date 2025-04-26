import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TagButton from "../components/TagButton";

const meta = {
  title: "Buttons/TagButton",
  component: TagButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼의 텍스트"
    },
    isChecked: {
      control: "boolean",
      description: "버튼 활성화 여부"
    },
    onClick: {
      control: false,
      description: "버튼 이벤트"
    }
  },
  args: { children: "button", isChecked: false, onClick: fn() }
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "button",
    isChecked: false
  }
};
