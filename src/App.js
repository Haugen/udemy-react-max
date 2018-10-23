import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <Layout>
        <Router>
          <>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/posts" exact component={Posts} />
          </>
        </Router>
      </Layout>
    );
  }
}

export default App;
