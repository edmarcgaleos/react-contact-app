/**
*
* AddContact
*
*/

import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const addContactWrapper = styled.div`
  background-color: blue;
  margin: 10px;

  input.input-name[type=text] {
    border: 2px solid gray;
  }
`;

class AddContact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { 
      name,
      // number,
      // address,
      addContact,
      onChangeName } = this.props;
    return (
      <addContactWrapper>
        <p> Add Contact Person</p>
        <form>
          <div>
            Name: 
            <input 
              placeholder='Name'
              value={name}
              onChange={onChangeName} 
              className="input-name" 
            />
          </div>
          {/* <div>
            Number: <input placeholder='Number' value={number} onChange={onChange} className="input-number" />
          </div>
          <div>
            Address: <input placeholder='Address' value={address} onChange={onChange} className="input-address" />
          </div> */}
          <Button className="addButton" onClick={addContact}>
          Add
        </Button>
        </form>
      </addContactWrapper>
    );
  }
}

AddContact.propTypes = {

};

export default AddContact;
