import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 20px;
  gap: 20px;
  width: 100vw;
  border-bottom: 3px solid grey;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.04),
    0 1px 10px 0 rgba(0, 0, 0, 0.02);
`;

export const NavBarItem = styled(NavLink)`
  text-decoration: none;
  font-size: 26px;
  display: block;
  color: black;

  &.active {
    color: tomato;
  }
`;
