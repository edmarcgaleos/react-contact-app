/**
*
* AddContact
*
*/

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button';


const addContactWrapper = styled.div`
  margin: 10px;

  input.input-name[type=text] {
    border: 2px solid gray;
  }
`;

class AddContact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      name,
      number,
      address,
      addContact,
      onChangeName,
      onChangeNumber,
      onChangeAddress } = this.props;

    return (
      <addContactWrapper>
        <p> Add Contact Person</p>
        <form>
          <div>
            Name:
            <input
              type="text"
              placeholder="Name.."
              value={name}
              onChange={onChangeName}
              className="input-name"
              maxLength={30}
            />
          </div>
          <div>
            Number:
            <input
              placeholder="Number.."
              value={number}
              onChange={onChangeNumber}
              className="input-number"
              maxLength={20}
            />
          </div>
          <div>
            Address:
            <input
              placeholder="Address.."
              value={address}
              onChange={onChangeAddress}
              className="input-address"
              maxLength={30}
            />
          </div>
          <Button className="addButton" onClick={addContact}>
          Add
        </Button>
        </form>
      </addContactWrapper>
    );
  }
}

AddContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  address: PropTypes.string,
  addContact: PropTypes.func,
};

export default AddContact;
