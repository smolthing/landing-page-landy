import styled from "styled-components";
import { theme } from '../../styles/colors';
import { darken } from 'polished';

const getPadding = (padding: string) => {
  return padding ? padding : "10px 0";
};

const getBoxShadow = (color: string, themeButton: string) => {
  const baseColor = color || themeButton;
  return `${darken(0.2, baseColor)} 6px 6px 0`;
};

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || theme.button};
  color: ${theme.buttonText};
  font-size: 1rem;
  font-family: Motiva Sans Bold, sans-serif;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: ${(p) => getPadding(p.padding)};
  cursor: pointer;
  margin-right: 15px;
  max-width: 160px;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(p) => getBoxShadow(p.color, theme.button)};
  min-width: 100px;

  &:hover {
    color: ${theme.buttonText};
    background-color: ${theme.buttonActive};
    box-shadow: ${theme.navActive} 6px 6px 0;
  }
`;
