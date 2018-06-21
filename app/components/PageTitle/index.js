/**
*
* PageTitle
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';


const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background-color: #3AAFA9
  padding: 10px 8px;
  box-shadow: 0 3px 0 rgba(23,37,42,0.2);
  color: #1d5654
`;

class PageTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
      {this.props.title}
       </Wrapper>
    );
  }
}

PageTitle.propTypes = {

};

export default PageTitle;