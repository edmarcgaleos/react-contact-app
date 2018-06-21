/*
 *
 * Contacts
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContacts from './selectors';
import messages from './messages';
// import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

export class Contacts extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const contacts = [
      {
        name: "Jay"
      },
      {
        name: "Miming"
      }
    ]
    return (
      <div>
        <Helmet
          title="Contact List"
          meta={[
            { name: 'description', content: 'Contact List' },
          ]}
        />
        <PageTitle 
          title="Contacts" 
        />
      </div>
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
