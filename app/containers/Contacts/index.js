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
import { openModalAction,
    openUpdateModalAction,
    addContactAction,
    changeName,
    changeNumber,
    changeAddress,
    editIndex,
    editPerson,
    updateEditedContact,
    deleteContact,
    // errorAddContactAction
} from './actions';
import UpdateContacts from '../../components/UpdateContacts';


const ContactWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 13rem);
`;

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.updateButton = this.updateButton.bind(this);
  }
  updateButton(id, name, number, address, persons) {
    const updatedContact = {
      name,
      number,
      address,
    };
  for (let i = 0; i < persons.length; i++) { //eslint-disable-line
    if (i === id) {
      persons[i] = updatedContact; //eslint-disable-line
    }
  }
    this.props.updateContactClick(persons);
  }
  render() {
    const {
      persons,
      showModal,
      id,
      showUpdateModal,
      name,
      number,
      address,
    } = this.props.contacts;
    let mapContacts = {};

    if (persons.length === 0) {
      mapContacts =
        <ContactList alert="No Contacts Available." />;
    } else {
      mapContacts = persons.map((person, index) => <ContactList
        alert={''}
        name={person.name}
        number={person.number}
        address={person.address}
        key={index}
        id={index}
        updateButton={this.props.openUpdateModalClick(showUpdateModal, person, index)}
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
        <ReactModal
          isOpen={showModal}
          contentLabel="Style Modal"
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,.2)' },
            content: { color: 'lightsteelblue' } }}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          ariaHideApp={false}
        >
          <button onClick={this.props.openModalClick(showModal)}>
              Close
            </button>
          <AddContact
            addContact={this.props.addContactClick(name, number, address)}
            onChangeName={this.props.onChangeName}
            onChangeNumber={this.props.onChangeNumber}
            onChangeAddress={this.props.onChangeAddress}
            name={name}
            number={number}
            address={address}
          />

        </ReactModal>

        <ContactWrapper>
          {mapContacts}
          <ReactModal
            isOpen={showUpdateModal}
            contentLabel="Style Modal"
            style={{ overlay: { backgroundColor: 'rgba(0,0,0,.2)' },
              content: { color: 'lightsteelblue' } }}
            shouldCloseOnOverlayClick={false}
            ariaHideApp={false}
          >
            <button onClick={this.props.openUpdateModalClick(showUpdateModal)}>
                Close
              </button>
            <UpdateContacts
              id={id}
              name={name}
              number={number}
              address={address}
              updateName={this.props.onChangeName}
              updateNumber={this.props.onChangeNumber}
              updateAddress={this.props.onChangeAddress}
              updateContact={() => this.updateButton(id, name, number, address, persons)}
            />
          </ReactModal>
        </ContactWrapper>
      </ContentWrapper>
    );
  }
}

Contacts.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  contacts: makeSelectContacts(),
});

function mapDispatchToProps(dispatch) {
  return {
    openModalClick: (value) => () => {
      dispatch(openModalAction(!value));
    },
    openUpdateModalClick: (value, person, index) => () => {
      dispatch(openUpdateModalAction(!value));
      dispatch(editIndex(index));
      dispatch(editPerson(person));
    },
    addContactClick: (name, number, address) => () => {
      const newContact = {
        name,
        number,
        address,
      };
      dispatch(addContactAction(newContact));
    },
    updateContactClick: (persons) => {
      dispatch(updateEditedContact(persons));
    },
    deleteContactClick: (delPersons) => {
      dispatch(deleteContact(delPersons));
    },
    onChangeName: (event) => {
      const name = event.target.value;
      dispatch(changeName(name));
    },
    onChangeNumber: (event) => {
      const number = event.target.value;
      dispatch(changeNumber(number));
    },
    onChangeAddress: (event) => {
      const address = event.target.value;
      dispatch(changeAddress(address));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
