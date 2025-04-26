import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IconButton from "./IconButton";

interface IDefaultTextFieldProps {
  id: string;
  errorMessage: string;
  iconPath: string;
  iconAlt: string;
  onIconClick: MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
}

const DefaultTextField = ({
  id,
  errorMessage,
  iconAlt,
  iconPath,
  onChange,
  onIconClick,
  placeholder,
  value,
  isError
}: IDefaultTextFieldProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const borderColor = isFocus ? "border-secondary" : !value ? "border-mono300" : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={`text-primary border-b ${borderColor} w-full`}
      >
        <input
          id={id}
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type="text"
        />
        {!!value && <IconButton alt={iconAlt} iconPath={iconPath} onClick={onIconClick} />}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
