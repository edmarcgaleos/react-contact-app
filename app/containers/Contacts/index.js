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
import ReactModal from 'react-modal';
import AddContact from '../../components/AddContact';


const ContactWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 13rem);

`;

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
     this.state = { 
      contacts : [
        { id: 1 , name: "John Doe", number: 123124, address: "Cebu City" },
        { id: 2 , name: "John Doe", number: 123124, address: "Cebu City" },
        { id: 3 , name: "John Doe", number: 123124, address: "Cebu City" },
        { id: 4 , name: "John Doe", number: 123124, address: "Cebu City" },
        { id: 5 , name: "John Doe", number: 123124, address: "Cebu City" },

     ],
     showModal: false,
     name: '',
     number: '',
     address: ''
    };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      
  }

  openModal () {
    this.setState({ showModal: true });
  }
  closeModal () {
    this.setState({ showModal: false });
  }
   
  render() {
    let mapContacts = {};

    if(this.state.contacts.length === 0 ){
      mapContacts = 
      <ContactList alert="No Contacts Available." />
        
      return mapContacts;

    }else{
     mapContacts = this.state.contacts.map((contact) => {
      return <ContactList 
        name= {contact.name}
        number = {contact.number}
        address = {contact.address}
        key={contact.id}
      />
    });
  }
  const title = "Contacts"
    return (
      <ContentWrapper>
        <Helmet
          title="Contact List"
          meta={[
            { name: 'description', content: 'Contact List' },
          ]}
        />
        <PageTitle
          title = { title }
          openModal={this.openModal}
        />
        
        <ContactWrapper>
          {mapContacts}
            <ReactModal 
                isOpen = {this.state.showModal}
                contentLabel = "Style Modal"
                style={{overlay:{backgroundColor: 'rgba(0,0,0,.2)'}, content : { color: 'lightsteelblue'}}}
                onRequestClose={this.closeModal}
                shouldCloseOnOverlayClick={false}
            >
              <button onClick={this.closeModal}>
                Close
              </button>
              <p> Input here </p>
            </ReactModal>
            
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
