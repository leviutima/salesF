import { ButtonHTMLAttributes, FormEvent } from "react";
import { ButtonElement } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  inverse?: boolean;
  size?: "large" | "small" | undefined;
  variant?: "info" | "danger" | undefined;
  onClick: (event: FormEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonElement onClick={onClick}>
      {children}
    </ButtonElement>
  );
};
