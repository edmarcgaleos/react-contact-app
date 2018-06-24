/*
 *
 * Contacts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import makeSelectContacts from './selectors';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import ContactList from '../../components/ContactList';


const ContactWrapper = styled.div`
  width: 100%;
  background-color:#222;
  

`;

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
     this.state = [
      {name: "John", number: 12345566, address: "Cebu City"},
      {name: "Jay", number: 21123220, address: "Cebu City"},
      {name: "Jude", number: 32321120, address: "Cebu City"},
     ];
  
  }
  render() {
    
    for(i = 0; i < this.state.contacts.length; i++ ){
      const name = contacts[i].name;
      const number = contacts[i].number;
      const address = contacts[i].address;

    }
    
    return (
      <ContentWrapper>
        <Helmet
          title="Contact List"
          meta={[
            { name: 'description', content: 'Contact List' },
          ]}
        />
        <PageTitle
          title="Contacts"
        />
        <ContactWrapper>
          <ContactList
          
            name = {name}
            number = {number}
            address = {address}
          />
          
        
        </ContactWrapper>
      </ContentWrapper>
    );
  }
}

Contacts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Contacts: makeSelectContacts(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
