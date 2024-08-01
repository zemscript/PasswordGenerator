import styled from "styled-components";
import "../../../global-styles";

export const Ftr = styled.footer`
  background: #333333;
  color: #fff;
  padding: 1rem;
`;

export const FtrList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const FtrItem = styled.li`
  user-select: none;
`;

export const FtrLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #c0c0c0;
  }
`;
