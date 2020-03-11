import { useOktaAuth } from '@okta/okta-react';
import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import logo from './logo.svg';

const Navbar = () => {
  const { authState, authService } = useOktaAuth();

  const login = async () => authService.login('/');
  const logout = async () => authService.logout('/');

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header href="/">
            <Image size="mini" src={logo} />
            &nbsp;
            Okta-React Sample Project
          </Menu.Item>
          {authState.isAuthenticated && <Menu.Item id="profile-button" as="a" href="/profile">Profile</Menu.Item>}
          {authState.isAuthenticated && <Menu.Item id="logout-button" as="a" onClick={logout}>Logout</Menu.Item>}
          {!authState.isPending && !authState.isAuthenticated && <Menu.Item as="a" onClick={login}>Login</Menu.Item>}
        </Container>
      </Menu>
    </div>
  );
};
export default Navbar;