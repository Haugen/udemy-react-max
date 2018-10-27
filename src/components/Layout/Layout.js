import React from 'react';

import classes from './layout.module.css';
import Toolbar from '../Toolbar/Toolbar';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Toolbar />
        <main className={classes.MainContent}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
