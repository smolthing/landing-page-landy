import styled from "styled-components";
import { theme } from '../../styles/colors';

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || theme.button};
  color: ${(p) => (p.color ? theme.button: theme.buttonText)};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);
  min-width: 100px;

  &:hover,
  &:active,
  &:focus {
    color: ${theme.buttonText};
    background-color: ${theme.buttonActive};
  }
`;
