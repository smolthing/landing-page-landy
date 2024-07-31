import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  padding,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton color={color} padding={padding} onClick={onClick}>
    {children}
  </StyledButton>
);
