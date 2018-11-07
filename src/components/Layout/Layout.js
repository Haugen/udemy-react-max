import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './layout.module.css';
import Toolbar from '../Toolbar/Toolbar';
import * as actionCreators from '../../store/actions/index';

class Layout extends React.Component {
  componentDidMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <>
        <Toolbar userId={this.props.userId} />
        <main className={classes.MainContent}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(actionCreators.authCheckState())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
);
