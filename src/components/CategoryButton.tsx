interface ICategoryButtonProps {
  iconPath: string;
  iconAlt: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CategoryButton = ({ iconPath, iconAlt, text, onClick }: ICategoryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
    rounded-default border border-primary text-primary 
    text-base 
    font-bold 
    pl-[22px] 
    pr-[21px] 
    py-4 
    flex 
    flex-col 
    items-center
    `}
    >
      <img src={iconPath} alt={iconAlt} />
      <p>{text}</p>
    </button>
  );
};

export default CategoryButton;
