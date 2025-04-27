import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: { control: "text", description: "이미지의 경로" },
    iconAlt: { control: "text", description: "이미지 alt 속성" },
    onClick: { description: "버튼 클릭 이벤트", control: false },
    text: { control: "text", description: "버튼에 표시될 텍스트" }
  },
  args: { onClick: fn(), iconAlt: "icon", text: "카테고리" }
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    iconAlt: "icon",
    text: "카테고리",
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-category.svg"
  }
};
