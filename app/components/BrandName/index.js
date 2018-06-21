import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
`;

class BrandName extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { brand } = this.props;
    return (
      <Wrapper>
        {brand}
      </Wrapper>
    );
  }
}

BrandName.propTypes = {
  brand: PropTypes.string,
};

export default BrandName;
