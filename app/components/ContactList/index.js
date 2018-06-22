/**
*
* ContactList
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactListWrapper = styled.div`
  margin:0 auto;
  padding: 10px;
  background-color: #222; 
  border: .1px solid gray;
  color: #FFFF;
  font-family: 'Droid Sans', sans-serif;
  font-size: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;

  .contact-img {
    background-color:gray;
    width:20%;
      .img-holder{
        text-align: center;

      }
  }

  .contact-details {
    background-color: green;
    width:80%;

  }
  .contact-info {
    display: flex;
    background-color: red;
    justify-content: space-around;

  }
  .contact-name {
    flex-grow:1;

  }
  
`;

class ContactList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name } = this.props;
    const { number } = this.props;
    const { address } = this.props;
    return (
      <ContactListWrapper>
        <div className="contact-img">
          <div className="img-holder">
          Image
          </div>
        </div>
        <div className="contact-details">
          <div className="contact-name">
            {name}
          </div>
          <div className="contact-info">
            <div className="number">
              {number}</div>
            <div className="address">
              {address}</div>
          </div>
        </div>
      </ContactListWrapper>
    );
  }
}

ContactList.propTypes = {

};

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  address: PropTypes.string,
};

export default ContactList;
