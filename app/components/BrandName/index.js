import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

import messages from './messages';

class BrandName extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
          {this.props.brand}
      </Wrapper>
    );
  }
}

export default BrandName;