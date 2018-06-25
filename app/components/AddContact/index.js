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
    return (
      <addContactWrapper>
        <p> Add Contact Person</p>
        <form>
          <div>
            Name: <input type="text" value={this.value} className="input-name" max={30} />
          </div>
          <div>
            number: <input type="text" value={this.value} className="input-number" />
          </div>
          <div>
            Address: <input type="text" value={this.value} className="input-address" />
          </div>
          <Button className="addButton">
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
