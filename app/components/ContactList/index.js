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
  background-color: #FFF; 
  color: #000;
  font-family: 'Droid Sans', sans-serif;
  font-size: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 5px 6px rgba(0,0,0,0.16);
  margin-bottom: 3px;
  .contact-img {
    width:20%;
    display: flex;
    justify-content: center;
    align-items: center;

      .img-holder{
        text-align: center;

      }
  }

  .contact-alert {
    display: flex;
    text-align: center;
  }

  .contact-details {
    width:80%;
    .contact-name-action {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .contact-name {
        margin: 10px 0px 10px 10px;
        color: #3AAFA9;
        font-size: 2.5rem;
      }
      .contact-update-button {
        color: green;
      }
    }
    .contact-info {
      display: flex;
  
      .number {
        width: 50%;
        margin: 10px;
    
      }
      .address {
        width: 50%;
        margin: 10px;
      }
  
    }

  }
  
  
  
`;

class ContactList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { name, number, address, alert, updateButton, id} = this.props;
    return (
      <div>
      {
        alert !== '' ? <ContactListWrapper>
            <div className="contact-alert">
            {alert}
            </div>
          </ContactListWrapper>
        : <ContactListWrapper>
        <div className="contact-img">
          <div className="img-holder">

          </div>
        </div>
        <div className="contact-details">
          <div className="contact-name-action">
            <div className="contact-name">
              {name}
            </div>
            <div className="contact-update-button">
              <button onClick={updateButton}>
                Edit
                </button>
            </div>
          </div>
          <div className="contact-info">
            <div className="number">
              {number}</div>
            <div className="address">
              {address}</div>
          </div>
        </div>
      </ContactListWrapper>
      }  
      </div>
  );
  }
}

ContactList.propTypes = {

};

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  address: PropTypes.string,
  alert: PropTypes.string,
};

export default ContactList;
