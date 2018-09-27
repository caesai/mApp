import React from 'react';
import styled from 'styled-components';

import logoIcon from './assets/logo.svg';
import menuIcon from './assets/menu.svg';

const Root = styled.header`
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    flex-flow: row nowrap;
    align-items: center;
`;

const Logo = styled.img`
    height: 40px;
    display: block;
    flex: 0 0 auto;
`;

const Menu = styled.img`
    display: block;
    flex: 0 0 22px;
    margin-left: auto;
`;

const Header = () => (
  <Root>
    <Logo src={logoIcon} alt="logo" />
    <Menu
      src={menuIcon}
      alt="menu"
      width="22"
      height="16"
    />
  </Root>
);

export default Header;
