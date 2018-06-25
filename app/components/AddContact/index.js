/**
*
* AddContact
*
*/

import React from 'react';
import styled from 'styled-components';

const addContactWrapper = styled.div`
  background-color: blue;
  margin: 10px;
`;

class AddContact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <addContactWrapper>
        <div>
        <input type="text" value={this.value} className="name" />
        </div>
        <div>
        <input type="text" value={this.value} className="number" />
        </div>
        <div>
        <input type="text" value={this.value} className="address" />
        </div>
        <button className="addButton"/>

      </addContactWrapper>
    );
  }
}

AddContact.propTypes = {

};

export default AddContact;
