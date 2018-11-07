import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import classes from './layout.module.css';
import Toolbar from '../Toolbar/Toolbar';

class Layout extends React.Component {
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

export default withRouter(connect(mapStateToProps)(Layout));
