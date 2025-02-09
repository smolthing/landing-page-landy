import styled from "styled-components";
import { theme } from '../../styles/colors';

export const ContactContainer = styled("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: ${theme.errorText};
  height: 0.775rem;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled("div")`
  position: relative;
  margin-top: 10px;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
