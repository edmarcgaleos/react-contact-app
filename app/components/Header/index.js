import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import BrandName from '../BrandName'
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar>
          <BrandName
            brand="Contact App"
          />
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          {/* <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink> */}
        </NavBar>
      </div>
    );
  }
}

export default Header;