import { PAGE_NAMES } from 'components/Router/path';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from 'utils/Container';
import {
  Button,
  HeaderStyle,
  HeaderNav,
  LeftTabs,
  RightTabs,
  TabLink,
} from './Header.styled';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('');

  const handleButtonClick = event => {
    setActiveButton(event.target.dataset.action);
  };

  const handleTabLinkClick = () => {
    setActiveButton('');
  };

  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderNav>
            <LeftTabs>
              <TabLink to={PAGE_NAMES.homepage} onClick={handleTabLinkClick}>
                Home
              </TabLink>
              <TabLink to={PAGE_NAMES.contacts} onClick={handleTabLinkClick}>
                Contacts
              </TabLink>
            </LeftTabs>
            <RightTabs>
              <NavLink to={PAGE_NAMES.login}>
                <Button
                  isActive={activeButton === 'login'}
                  data-action="login"
                  onClick={handleButtonClick}
                >
                  Log In
                </Button>
              </NavLink>
              <NavLink to={PAGE_NAMES.register}>
                <Button
                  isActive={activeButton === 'signup'}
                  data-action="signup"
                  onClick={handleButtonClick}
                >
                  Sign Up
                </Button>
              </NavLink>
            </RightTabs>
          </HeaderNav>
        </Container>
      </HeaderStyle>
    </>
  );
};
