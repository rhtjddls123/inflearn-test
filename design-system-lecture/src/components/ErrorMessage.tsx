import { ReactNode } from "react";

interface IErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: IErrorMessageProps) => {
  return <p className="text-xs text-error">{children}</p>;
};

export default ErrorMessage;
