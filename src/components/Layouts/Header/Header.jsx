import { useUser } from 'components/hooks/useUser';
import { PAGE_NAMES } from 'components/Router/path';
import { useState } from 'react';
import { useLogoutMutation } from 'redux/auth-operations';
import { Container } from 'utils/Container';
import {
  Button,
  HeaderStyle,
  HeaderNav,
  LeftTabs,
  RightTabs,
  TabLink,
  NavButton,
  HeaderBlock,
  HeaderLogo,
} from './Header.styled';

export const Header = () => {
  const [activeButton, setActiveButton] = useState('');

  const { isAuth, localLogOut } = useUser();

  const [logout] = useLogoutMutation();
  console.log(isAuth);

  const handleButtonClick = event => {
    setActiveButton(event.target.dataset.action);
  };

  const handleTabLinkClick = () => {
    setActiveButton('');
  };

  const handleLogOutClick = async () => {
    await logout();
    localLogOut();
  };

  return (
    <>
      <HeaderStyle>
        <Container>
          <HeaderBlock>
            <HeaderLogo to={PAGE_NAMES.homepage}>Phonebook</HeaderLogo>
            <HeaderNav>
              <LeftTabs>
                <TabLink to={PAGE_NAMES.homepage} onClick={handleTabLinkClick}>
                  Home
                </TabLink>
                {isAuth && (
                  <TabLink
                    to={PAGE_NAMES.contacts}
                    onClick={handleTabLinkClick}
                  >
                    Contacts
                  </TabLink>
                )}
              </LeftTabs>
              <RightTabs>
                {!isAuth && (
                  <>
                    <NavButton to={PAGE_NAMES.login}>
                      <Button
                        isActive={activeButton === 'login'}
                        data-action="login"
                        onClick={handleButtonClick}
                      >
                        Log In
                      </Button>
                    </NavButton>
                    <NavButton to={PAGE_NAMES.register}>
                      <Button
                        isActive={activeButton === 'signup'}
                        data-action="signup"
                        onClick={handleButtonClick}
                      >
                        Sign Up
                      </Button>
                    </NavButton>
                  </>
                )}
                {isAuth && (
                  <NavButton to={PAGE_NAMES.homepage}>
                    <Button
                      // isActive={activeButton === 'login'}
                      // data-action="login"
                      onClick={handleLogOutClick}
                    >
                      Log Out
                    </Button>
                  </NavButton>
                )}
              </RightTabs>
            </HeaderNav>
          </HeaderBlock>
        </Container>
      </HeaderStyle>
    </>
  );
};
