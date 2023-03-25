import { PAGE_NAMES } from 'components/Router/path';
import { NavLink } from 'react-router-dom';
import { Container } from 'utils/Container';

export const Header = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <a href="/">
              <h1>Contacts</h1>
            </a>
            <NavLink to={PAGE_NAMES.homepage}>Home</NavLink>
            <NavLink to={PAGE_NAMES.contacts}>Contacts</NavLink>
            <NavLink to={PAGE_NAMES.login}>Log In</NavLink>
            <NavLink to={PAGE_NAMES.signup}>Sign Up</NavLink>
          </nav>
        </Container>
      </header>
    </>
  );
};
