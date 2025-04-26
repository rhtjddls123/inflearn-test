import { ReactNode } from "react";

interface TagButtonProps {
  children: ReactNode;
  isChecked: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const TagButton = ({ children, isChecked, onClick }: TagButtonProps) => {
  const buttonStyle = isChecked ? "bg-white text-primary" : "text-white bg-dark-opacity";

  return (
    <button
      className={`
      rounded-tag-button 
      px-[10px] border 
      border-white 
      h-[33px] 
      text-sm 
      font-medium 
      ${buttonStyle}
    `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagButton;
