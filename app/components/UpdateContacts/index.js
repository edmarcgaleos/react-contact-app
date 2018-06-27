/**
*
* UpdateContacts
*
*/

import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const updateContactWrapper = styled.div`

`;
class UpdateContacts extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      id,
      name,
      number,
      address,
      // updateContact,
      updateName,
      updateNumber,
      updateAddress } = this.props;
    return (
      <updateContactWrapper>
      <p> Update Contact Person</p>
        <form>
          <div>
            Index: {id}
          </div>
          <div>
            Name:
            <input
              type="text"
              value={name}
              onChange={updateName}
              className="input-update-name"
              maxLength={30}
            />
          </div>
          <div>
            Number:
            <input
              value={number}
              onChange={updateNumber}
              className="input-update-number"
              maxLength={20}
            />
          </div>
          <div>
            Address:
            <input
              value={address}
              onChange={updateAddress}
              className="input-update-address"
              maxLength={30}
            />
          </div>
          <Button className="updateButton">
          Update
        </Button>
        </form>
      </updateContactWrapper>
    );
  }
}

UpdateContacts.propTypes = {

};

export default UpdateContacts;
