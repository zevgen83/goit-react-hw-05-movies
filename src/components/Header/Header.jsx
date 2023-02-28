import { HeaderNav, NavBarItem } from '../Header/Header.styled';

export const Header = () => {
  return (
    <HeaderNav>
      <NavBarItem to="/">Home</NavBarItem>
      <NavBarItem to="/movies">Movies</NavBarItem>
    </HeaderNav>
  );
};
