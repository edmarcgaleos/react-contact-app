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
  render() {
    const contacts = [
      {
        name: 'Jay',
      },
      {
        name: 'Miming',
      },
    ];
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
            name="John Doe"
            number={12345}
            address="Cebu City"
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
