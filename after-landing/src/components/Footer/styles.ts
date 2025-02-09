import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from '../../styles/colors';

export const FooterSection = styled("footer")`
  background: ${theme.background};
  padding: 2.5rem 0;
  height: 300px;
`;

export const Title = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: ${theme.primary};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  color: ${theme.nav};
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${theme.navActive};
  }
`;

export const Extra = styled("section")`
  background: ${theme.background};
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: ${theme.primary};
  font-size: 14px;
  width: 70%;
`;

export const Large = styled("a")<any>`
  font-size: 16px;
  color: ${theme.link};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: ${theme.linkActive};
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("a")`
  color: ${theme.primary};
  max-width: fit-content;
  border-bottom: 1px solid ${theme.primary};
  cursor: pointer;
  display: block;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    border-bottom: 1px solid ${theme.linkActive};
    color: ${theme.linkActive};
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: ${theme.primary};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled("label")`
  font-size: 15px;
  text-transform: capitalize;
  color: ${theme.primary};
  display: block;
  margin: 1rem 0;
  font-family: "Motiva Sans Bold", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 70px;
`;

export const SocialLinkStyle = styled("a")`
  padding-right: 10px;
`;