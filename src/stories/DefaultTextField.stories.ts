import type { Meta, StoryObj } from "@storybook/react";
import DefaultTextField from "../components/DefaultTextField";
import { fn } from "@storybook/test";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text", description: "텍스트 필드의 id" },
    iconPath: { control: "text", description: "아이콘 이미지의 경로" },
    iconAlt: { control: "text", description: "아이콘 이미지의 alt속성" },
    placeholder: { control: "text", description: "텍스트 필드의 placeholder" },
    value: { control: "text", description: "텍스트 필드의 값" },
    errorMessage: { control: "text", description: "텍스트 필드의 에러 메시지" },
    isError: { control: "boolean", description: "에러 상태 여부" },
    onChange: { control: false, description: "텍스트 필드 값 변경 이벤트" },
    onIconClick: { control: false, description: "버튼 클릭 이벤트" }
  },
  args: {
    id: "",
    isError: false,
    onChange: fn(),
    onIconClick: fn(),
    placeholder: "텍스트를 입력해주세요",
    iconAlt: "icon"
  }
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "icons/ic-delete-dark.svg",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    id: "email"
  }
};
