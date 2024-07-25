import styled from "styled-components";
import "../../../global-styles";

export const Hdr = styled.header`
  background: #333333;
  color: #fff;
  padding: 1rem;
`;

export const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  padding: 0.5rem;
  font-size: var(--fontSize16);
  font-family: var(--fontTitle);
  user-select: none;
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #c0c0c0;
  }
`;
