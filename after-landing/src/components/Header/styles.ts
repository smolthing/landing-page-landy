import styled from "styled-components";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { theme } from '../../styles/colors';

export const HeaderSection = styled("header")`
  padding: 2rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 200px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  cursor: pointer; 
  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-family: 'Motiva Sans Bold', sans-serif;
  font-size: 1rem;
  color: ${theme.nav};
  transition: color 0.2s ease-in;
  margin: 0.5rem 1.5rem;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: ${theme.text};
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuOutline = styled(MenuOutlined)<any>`
  cursor: pointer;
  font-size: 20px;
  padding: 15px;
`;

export const Outline = styled(CloseOutlined)<any>`
  cursor: pointer;
  font-size: 20px;
  padding: 15px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${theme.navActive};
    text-underline-position: under;
    text-decoration: ${theme.navActive} wavy underline;
  }
`;
