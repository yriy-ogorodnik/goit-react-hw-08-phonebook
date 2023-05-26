import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 30px 15px;
  background-color: #ebd8ff;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 10px;
  }
`;

export const NavLinkSt = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 22px;
  &.active {
    color: #ff0000;
  }
`;

export const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;
