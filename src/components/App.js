// This component handles the App template used on every page.
// Think of it as the layout page
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import * as generalActions from './../actions/generalActions';
import Header from './common/Header';
import MobileMenu from './common/MobileMenu';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import Transition from 'react-motion-ui-pack'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.closeMobileMenu = this.closeMobileMenu.bind(this);
    this.openMobileMenu = this.openMobileMenu.bind(this);

  }

  closeMobileMenu(event) {
    event.preventDefault();
    this.props.actions.toggleMobileMenu(false)
  }

  openMobileMenu(event) {
    event.preventDefault();
    this.props.actions.toggleMobileMenu(true)
  }

  render() {
    console.log(this.props.showMenu)
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
          openMobileMenu={this.openMobileMenu}
        />
        <Transition
          component={false} // don't use a wrapping component
          enter={{
            opacity: 1,
            translateY: spring(0, {stiffness: 400, damping: 10})
          }}
          leave={{
            opacity: 0,
            translateY: 250
          }}
        >
          { this.props.showMenu &&
          <div key="modal" className="menu__content">
            <MobileMenu closeMenu={this.closeMobileMenu} showMenu={this.props.showMenu}/>
          </div>
          }
        </Transition>
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
    loading: state.ajaxCallsInProgress > 0,
    showMenu:state.general.showMenu
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(generalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
