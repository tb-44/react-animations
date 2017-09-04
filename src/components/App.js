// This component handles the App template used on every page.
// Think of it as the layout page
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import * as generalAction from './../actions/generalActions';
import Header from './common/Header';
import MobileMenu from './common/MobileMenu';

import {connect} from 'react-redux';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        mobileMenuOpen: false
      };

    this.closeMobileMenu = this.closeMobileMenu.bind(this);

  }

  closeMobileMenu(event) {
    event.preventDefault();
    this.props.actions.toggleMobileMenu(false);
  }

  openMobileMenu(event) {
    event.preventDefault();
    this.setState({mobileMenuOpen: true});
  }

  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          openMobileMenu={this.openMobileMenu}
        />
        <MobileMenu closeMenu={this.closeMobileMenu} showMenu={this.state.mobileMenuOpen}/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(generalAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
