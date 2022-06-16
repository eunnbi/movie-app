import { NavLink } from "react-router-dom";
import { NAV } from "../../constant/nav";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  background-color: #fff;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.laptop} {
    display: block;
    width: 100%;
    overflow: hidden;
    height: ${({ showNav }) => (showNav ? "14rem" : "0px")};
    transition: all 0.3s linear;
  }
`;

const Anchor = styled(NavLink)`
  margin: 0 2rem;
  display: block;
  font-size: 1.2rem;
  color: #073763;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #49a6e9;
  }
  &.active {
    color: #49a6e9;
  }
  @media ${({ theme }) => theme.device.laptop} {
    margin: 0;
    padding: 1.5rem;
    &:hover {
      background: #93d2ff;
      color: #fff;
    }
  }
`;

function Nav({ showNav }) {
  return (
    <StyledNav showNav={showNav}>
      {NAV.map((nav) => (
        <Anchor key={nav.id} to={nav.to}>
          {nav.text}
        </Anchor>
      ))}
    </StyledNav>
  );
}

export default Nav;
