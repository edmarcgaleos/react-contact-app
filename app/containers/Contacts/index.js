/*
 *
 * Contacts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import makeSelectContacts from './selectors';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import ContactList from '../../components/ContactList';
import AddContact from '../../components/AddContact';
import { openModalAction, addContactAction, changeName } from './actions';


const ContactWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 13rem);
`;

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function  

  render() {
    const { persons, showModal, name, number, address } = this.props.contacts;
    console.log(persons);
    let mapContacts = {};

    if (persons.length === 0) {
      mapContacts =
        <ContactList alert="No Contacts Available." />;
      return mapContacts;
    } else {
      mapContacts = persons.map((persons) => <ContactList
        name={persons.name}
        number={persons.number}
        address={persons.address}
        key={persons.id}
      />);
    }
    const title = 'Contacts';

    return (
      <ContentWrapper>
        <Helmet
          title="Contact List"
          meta={[
            { name: 'description', content: 'Contact List' },
          ]}
        />
        <PageTitle
          title={title}
          openModal={this.props.openModalClick(showModal)}
        />

        <ContactWrapper>
          {mapContacts}
          <ReactModal
            isOpen={showModal}
            contentLabel="Style Modal"
            style={{ overlay: { backgroundColor: 'rgba(0,0,0,.2)' }, content: { color: 'lightsteelblue' } }}
            onRequestClose={this.closeModal}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={false}
          >
            <button onClick={this.props.openModalClick(showModal)}>
                Close
              </button>
            <AddContact 
              addContact = {this.props.addContactClick(name, number, address)}
              onChangeName = {this.props.onChangeName}
              name = {name}
            />
          </ReactModal>

        </ContactWrapper>
      </ContentWrapper>
    );
  }
}

Contacts.propTypes = {
  dispatch: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
});

function mapDispatchToProps(dispatch) {
  return {
    openModalClick: (value) => () =>{
      dispatch(openModalAction(!value))
    },
    addContactClick: (name, number, address) => () =>{
      const newContact = {
        name,
        number,
        address
      }
      dispatch(addContactAction(newContact))
    },
    onChangeName: (event) =>{
      const name = event.target.value
      dispatch(changeName(name))
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
