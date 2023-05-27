import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';


export const Navigation = () => {

  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
