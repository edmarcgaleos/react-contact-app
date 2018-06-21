/**
*
* PageTitle
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background-color: #3AAFA9;
  padding: 10px 8px;
  box-shadow: 0 3px 0 rgba(23,37,42,0.2);
  color: #1d5654;
`;

class PageTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { title } = this.props;
    return (
      <Wrapper>
        {title}
      </Wrapper>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
